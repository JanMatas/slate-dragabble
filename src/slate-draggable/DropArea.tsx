
import { useDrop } from 'react-dnd'
import './DropArea.css'

export type DropAreaPosition = 'top' | 'bottom' | 'left' | 'right'


interface IProps {
  onDrop: (position: DropAreaPosition, id: any) => void
  position: DropAreaPosition
}

export default function DropArea(
  props: IProps
) {
  const [{ isOver }, drop] = useDrop({
    accept: 'block',
    drop: (i: any) => props.onDrop(props.position, i.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <div contentEditable={false} ref={drop} className={`DropArea-${props.position} ${isOver ? 'DropArea-drag-hover' : ''}`} />
  )
}