
import { RenderElementProps, } from 'slate-react'
import { Element } from 'slate'

interface IQuote extends Element{
  type: 'quote'
}

interface IProps extends RenderElementProps {
  element: IQuote

}

export default (props: IProps) => {
  return <div className="Block" {...props.attributes}>{props.children}</div>

}