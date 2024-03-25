import styled, { css } from "styled-components";

export const Menu = styled.nav`
  ${({ theme }) => css`
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
    border: 1px solid ${theme.colors.N200};
    border-radius: 8px;
    box-sizing: border-box;
    padding: ${({ theme }) => `${theme.spacing.spacing8}px 0`};
    width: fit-content;
    background-color: ${theme.colors.N0};
  `}
`;
