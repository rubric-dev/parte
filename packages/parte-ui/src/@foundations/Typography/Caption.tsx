import { forwardRef } from "react";
import * as Styled from "./typography.styled";
import { CaptionProps } from "./typography.types";
import { extractStyleFormProps } from "../../utils/box.util";

export const Caption = forwardRef<HTMLSpanElement, CaptionProps>(
  (props: CaptionProps, ref) => {
    const [style, rest] = extractStyleFormProps(props);
    const { children, size, ...attributes } = rest;

    return (
      <Styled.Caption ref={ref} $style={style} $size={size} {...attributes}>
        {children}
      </Styled.Caption>
    );
  }
);

Caption.displayName = "Caption";
