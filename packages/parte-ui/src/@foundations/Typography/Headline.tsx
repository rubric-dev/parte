import { forwardRef } from "react";
import * as Styled from "./typography.styled";
import { HeadlineProps } from "./typography.types";
import { extractStyleFormProps } from "../../utils/box.util";

export const Headline = forwardRef<HTMLParagraphElement, HeadlineProps>(
  (props: HeadlineProps, ref) => {
    const [style, rest] = extractStyleFormProps(props);
    const { children, size, ...attributes } = rest;

    return (
      <Styled.Headline ref={ref} $style={style} $size={size} {...attributes}>
        {children}
      </Styled.Headline>
    );
  }
);

Headline.displayName = "Headline";
