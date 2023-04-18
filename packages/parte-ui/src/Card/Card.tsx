import * as Styled from './Card.styled'
import { CardProps } from './Card.types'

export const Card = ({
  type = 'default',
  children,
  width = 'fit-content',
  height = 'fit-content',
  ...props
}: CardProps) => {
  const CardComponent =
    type === 'default' ? Styled.DefaultCard : Styled.SelectableCard

  return (
    <CardComponent width={width} height={height} {...props}>
      {children}
    </CardComponent>
  )
}
