
import { RenderElementProps, } from 'slate-react'
import { Element } from 'slate'
import './Row.css'
interface IRow extends Element{
  type: 'row'
}

interface IProps extends RenderElementProps {
  element: IRow

}

export default (props: IProps) => {
  return <div className='Block Row' {...props.attributes}>{props.children}</div>

}