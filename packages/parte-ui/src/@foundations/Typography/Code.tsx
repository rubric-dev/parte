import { forwardRef } from "react";
import * as Styled from "./typography.styled";
import { CodeProps } from "./typography.types";
import { extractStyleFormProps } from "../../utils/box.util";

export const Code = forwardRef<HTMLElement, CodeProps>(
  (props: CodeProps, ref) => {
    const [style, rest] = extractStyleFormProps(props);
    const { children, variant, ...attributes } = rest;

    return (
      <Styled.Code ref={ref} $style={style} $variant={variant} {...attributes}>
        {children}
      </Styled.Code>
    );
  }
);

Code.displayName = "Code";
