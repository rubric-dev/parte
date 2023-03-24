import styled, { css } from 'styled-components';
import { Box } from '../../Layout';

export const List = styled(Box)`
  ${({ theme }) => {
    return css`
      box-sizing: border-box;
      border: 1px solid ${theme.colors.N300};
      border-radius: 4px;
      ${theme.elevation.elevation1};
      max-height: 273px;
      width: fit-content;
      overflow-x: hidden;
      overflow-y: auto;
    `;
  }}
`;

export const NoOption = styled(Box)`
  ${({ theme }) => css`
    width: 100%;
    height: 120px;
    ${theme.elevation.elevation1};
    ${theme.typography.P100}
    color: ${theme.colors.N800};
  `}
`;
