import { forwardRef } from "react";
import { extractStyleFormProps } from "../../utils/box.util";
import * as Styled from "./typography.styled";
import { type ParagraphProps } from "./typography.types";

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (props: ParagraphProps, ref) => {
    const [style, rest] = extractStyleFormProps(props);

    const { children, size, ...attributes } = rest;
    return (
      <Styled.Paragraph ref={ref} $style={style} $size={size} {...attributes}>
        {children}
      </Styled.Paragraph>
    );
  }
);

Paragraph.displayName = "Paragraph";
