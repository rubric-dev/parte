import styled, { css } from 'styled-components';
import { Box } from '../Layout';

export const Steps = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.spacing24}px;
  `}
`;
