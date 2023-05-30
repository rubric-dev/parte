import { forwardRef } from "react";
import styled from "styled-components";
import { extractStyleFormProps } from "../utils/box.util";
import { BoxProps, InnerBoxProps } from "./Box.types";

const StyledBox = styled.div<InnerBoxProps>`
  ${({ $style }) => $style}
`;

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const [boxStyle, rest] = extractStyleFormProps(props);
  const { children, ...attributes } = rest;

  return (
    <StyledBox ref={ref} $style={boxStyle} {...attributes}>
      {children}
    </StyledBox>
  );
});

Box.displayName = "Box";
