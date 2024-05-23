import styled, { css } from "styled-components";
import { Box } from "../Layout";

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Trigger = styled.div``;

export const Menu = styled(Box)<{ $hidden: boolean; $usePortal?: boolean }>`
  ${({ $hidden, $usePortal }) => {
    return css`
      opacity: ${$hidden ? 0 : 1};
      position: ${$usePortal ? "fixed" : "absolute"};
      height: fit-content;
      width: fit-content;
      z-index: ${$usePortal ? "999" : "11"};
    `;
  }}
`;
