import { useDrag } from "react-dnd";
import { Transforms } from "slate";
import { useSlate, ReactEditor } from "slate-react";
import { IRenderBlockProps } from "../blocks";

import "./DragabbleContainer.css"
import DropArea, { DropAreaPosition } from "./DropArea";

export default function DrababbleContainer(props: IRenderBlockProps) {
  const slate: any = useSlate()



  const onDrop = (position: DropAreaPosition, sourceRef: any) => {
    const targetPath = ReactEditor.findPath(slate, ReactEditor.toSlateNode(slate, props.attributes.ref.current))
    const sourcePath = ReactEditor.findPath(slate, ReactEditor.toSlateNode(slate, sourceRef.current))
    slate.drop(position, sourcePath, targetPath)
  }


  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: 'block', id:  props.attributes.ref},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div className="DragabbleContainer" >
      <DropArea position={'top'} onDrop={onDrop} />
      <div className="DragabbleContainer-center">
        <DropArea position={'left'} onDrop={onDrop} />
        <div className={`DragabbleContainer-body ${isDragging ? 'DragabbleContainer-dragging' : ''} `} ref={preview}>
          <div ref={drag} className="DragabbleContainer-handle" contentEditable={false}>⣿</div>
          <div className={`DragabbleContainer-content`}>
            {props.children}
          </div>
        </div>
        <DropArea position={'right'} onDrop={onDrop} />

      </div>
      <DropArea position={'bottom'} onDrop={onDrop} />

    </div>
  )
}
