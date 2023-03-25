import * as Styled from "./Card.styled";
import { CardProps } from "./Card.types";

export const Card = ({ type = "default", children, ...props }: CardProps) => {
  const CardComponent =
    type === "default" ? Styled.DefaultCard : Styled.SelectableCard;

  return <CardComponent {...props}>{children}</CardComponent>;
};
