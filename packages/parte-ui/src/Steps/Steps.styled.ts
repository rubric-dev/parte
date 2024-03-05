import styled, { css } from "styled-components";
import { Box } from "../Layout";

export const Steps = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing.spacing16}px;
  `}
`;
