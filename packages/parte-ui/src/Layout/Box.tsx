import { forwardRef } from "react";
import styled from "styled-components";
import { getBoxStyleAndHtmlProps } from "../utils/box.util";
import { BoxProps, InnerBoxProps } from "./Box.types";

const StyledBox = styled.div<InnerBoxProps>`
  ${({ $style }) => $style}
`;

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const [boxStyle, htmlProps] = getBoxStyleAndHtmlProps(props);
  const { children, ...rest } = htmlProps;

  return (
    <StyledBox ref={ref} $style={boxStyle} {...rest}>
      {children}
    </StyledBox>
  );
});

Box.displayName = "Box";
