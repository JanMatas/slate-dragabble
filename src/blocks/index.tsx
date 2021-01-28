
import { Editor, Element } from 'slate'
import { RenderElementProps } from 'slate-react'

import Paragraph from './Paragraph'
import Quote from './Quote'
import Image from './Image'
import Heading from './Heading'



export type BlockType = "paragraph"
| "heading-one"
| "quote"
| "image"
| "row"
| "col"

export interface IBlock extends Element {
  type: BlockType
}

export interface IRenderBlockProps extends RenderElementProps {
  element: IBlock
}


export function renderElement(props: IRenderBlockProps) {
  const anyProps = props as any // TODO fix prop casting

  switch(props.element.type) {
    case ('paragraph'): {
      return <Paragraph {...anyProps} />
    }
    case ('quote'): {
      return <Quote {...anyProps} />
    }
    case ('image'): {
      return <Image {...anyProps} />
    }
    case ('heading-one'): {
      return <Heading {...anyProps} />
    }
    default: {
      return <div>Not implemented</div>
    }
  }
}