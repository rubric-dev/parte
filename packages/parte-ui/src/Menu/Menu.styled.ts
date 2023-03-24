import styled, { css } from 'styled-components';

export const Menu = styled.nav`
  ${({ theme }) => css`
    ${theme.elevation.elevation1}
    box-sizing: border-box;
    padding: ${({ theme }) => `${theme.spacing.spacing8}px 0`};
    width: fit-content;
    background-color: ${theme.colors.N0};
  `}
`;
