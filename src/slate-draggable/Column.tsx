
import { RenderElementProps, } from 'slate-react'
import { Element } from 'slate'
import './Column.css'
interface IRow extends Element{
  type: 'col'
}

interface IProps extends RenderElementProps {
  element: IRow
}

export default (props: IProps) => {
  return <div className='Block Column' {...props.attributes}>{props.children}</div>

}