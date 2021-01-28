// Import React dependencies.
import React, { useEffect, useMemo, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact, RenderElementProps } from 'slate-react'
import { IRenderBlockProps, renderElement } from '../blocks'
import './Editor.css'
import { withDrags, renderDraggableElement } from '../slate-draggable'

function App() {


  // Wrap editor with dragging plugin.
  const editor = useMemo(() => withReact(withDrags(createEditor())), [])
  const [value, setValue] = useState<any[]>([
    {
      type: 'row',
      children: [
        {type: 'col', children: [        {
          type: 'paragraph',
          children: [{ text: 'Paragraph 0.' }],
        }]},
        {type: 'col', children: [        {
          type: 'paragraph',
          children: [{ text: 'Paragraph 1.' }],
        }]}
      ]
    },
    {
      type: 'paragraph',
      children: [{ text: 'Paragraph 2.' }],
    },
    {
      type: 'paragraph',
      children: [{ text: 'Paragraph 3.' }],
    },
    {
      type: 'paragraph',
      children: [{ text: 'Paragraph 4.' }],
    },
  ])



  useEffect(() => {
    editor.onChange()
  }, [])
  

  return (
    <div className='Editor'>
      <DndProvider backend={HTML5Backend}>
          <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable renderElement={(elementProps: RenderElementProps) => renderDraggableElement(elementProps as IRenderBlockProps, renderElement as any)} />
          </Slate>
      </DndProvider>
    </div>

  )
}

export default App;
