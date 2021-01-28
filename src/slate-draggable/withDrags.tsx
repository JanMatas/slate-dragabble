import { Editor, Element, Node, Path, Transforms } from "slate";
import { DropAreaPosition } from "./DropArea";
import _ from 'lodash'


export default function withDrags(editor: Editor): Editor {
  const { normalizeNode} = editor

  editor.normalizeNode = (entry: any) => {
    const [node, path] = entry
    // Remove empty columns
    if (node.type === 'col' && node.children.length === 0) {
      Transforms.removeNodes(editor, {at: path})
      return
    }

    // Remove rows with only one column
    if(node.type === 'row' && node.children.length === 1) {
      Transforms.removeNodes(editor, {at: path})
      Transforms.insertNodes(editor, node.children, {at: path})
      return
    }
    normalizeNode(entry)
  }

  editor.drop = (position: DropAreaPosition, sourcePath: Path, targetPath: Path) => {
    if(_.isEqual(sourcePath, targetPath)) {
      return
    }
    if (position === 'top') {
      Transforms.moveNodes(editor, {
        at: sourcePath,
        to: targetPath
      })
    } else if (position === 'bottom') {
      const copy = targetPath.slice()
      copy[targetPath.length -1] += 1
      Transforms.moveNodes(editor, {
        at: sourcePath,
        to: copy
      })
    }
    else if (position === 'right' || position === 'left') {
      const sourceNode = Node.get(editor, sourcePath)
      const targetNode = Node.get(editor, targetPath)
      const insertionOp = { type: 'insert_node', path: targetPath,  node: {
        type: 'row',
        children: [
          {
            type: 'col',
            children: [position === 'right' ? targetNode : sourceNode]
          },
          {
            type: 'col',
            children: [position === 'right' ? sourceNode : targetNode]
          },
        ]
      }}

      const deletionSource = {type: 'remove_node', path: Path.transform(sourcePath, insertionOp as any), node: sourceNode}
      const deletetionTarget = {type: 'remove_node', path: Path.transform(Path.transform(targetPath, insertionOp as any) as any, deletionSource as any), node: targetNode}

      // TODO this will probably break with history plugin - we will need to batch those.
      editor.apply(insertionOp as any)
      editor.apply(deletionSource as any)
      editor.apply(deletetionTarget as any)
    }

  }


  return editor
}