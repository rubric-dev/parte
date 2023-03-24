import * as Styled from "./Badge.styled";
import { BadgeProps } from "./Badge.types";

export const Badge = ({ type, badgeColor, text }: BadgeProps) => {
  return (
    <Styled.Badge badgeColor={badgeColor} type={type}>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Badge>
  );
};
