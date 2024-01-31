import styled, { css } from "styled-components";
import { Box } from "../Layout";

export const TargetWrapper = styled(Box)`
  display: inline-flex;
  width: fit-content;
  height: fit-content;
`;

export const Content = styled(Box)`
  ${({ theme }) => css`
    background-color: ${theme.colors.N800};
    padding: 8px 16px;
    border-radius: 8px;
    color: ${theme.colors.N0};
    box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
    font-size: 12px;
  `}
`;
