
import { RenderElementProps, } from 'slate-react'
import { Element } from 'slate'

interface IParagraph extends Element{
  type: 'paragraph'
}

interface IProps extends RenderElementProps {
  element: IParagraph

}

export default (props: IProps) => {
  return <div className="Block Paragraph" {...props.attributes}>{props.children}</div>

}