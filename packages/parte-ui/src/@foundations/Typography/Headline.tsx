import * as Styled from "./typography.styled";
import { HeadlineProps } from "./typography.types";

export function Headline({
  children,
  overrideStyles,
  ...props
}: HeadlineProps) {
  return (
    <Styled.Headline {...props} style={overrideStyles}>
      {children}
    </Styled.Headline>
  );
}
