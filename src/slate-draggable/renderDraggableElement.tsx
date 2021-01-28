import { RenderElementProps } from "slate-react"
import React from 'react';
import Column from "./Column";
import Row from "./Row";
import DrababbleContainer from "./DraggableContainer";





export default function renderDraggableElement (props: RenderElementProps, renderElement: (props: RenderElementProps) => JSX.Element) {
  const anyProps = props as any // TODO get rid of this type cast
  if (props.element.type === 'row') {
    return <Row {...anyProps} />
  } else if (props.element.type === 'col') {
    return <Column {...anyProps} />
  } else {
    return <DrababbleContainer {...anyProps} >
      {renderElement(props)}
    </DrababbleContainer>
  }



}