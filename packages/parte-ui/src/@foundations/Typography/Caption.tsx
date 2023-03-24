import * as Styled from "./typography.styled";
import { CaptionProps } from "./typography.types";

export function Caption({ children, overrideStyles, ...props }: CaptionProps) {
  return (
    <Styled.Caption {...props} style={overrideStyles}>
      {children}
    </Styled.Caption>
  );
}
