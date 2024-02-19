import * as Styled from "./Badge.styled";
import { BadgeProps } from "./Badge.types";

export const Badge = ({
  type = "badge",
  badgeColor = "AUTO",
  text,
  size = "small",
}: BadgeProps) => {
  return (
    <Styled.Badge $badgeColor={badgeColor} $type={type} $size={size}>
      {text}
    </Styled.Badge>
  );
};
