
import { RenderElementProps, } from 'slate-react'
import { Element } from 'slate'

interface IHeading extends Element{
  type: 'heading'
}

interface IProps extends RenderElementProps {
  element: IHeading

}

export default (props: IProps) => {
  return <h1 className="Block" {...props.attributes}>{props.children}</h1>

}