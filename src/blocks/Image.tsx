
import { RenderElementProps, } from 'slate-react'
import { Element } from 'slate'

interface IImage extends Element{
  type: 'image'
  source: string
}

interface IProps extends RenderElementProps {
  element: IImage

}

export default (props: IProps) => {
  return <img className="Block" src={props.element.source} {...props.attributes}>{props.children} </img>
}