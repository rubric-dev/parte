import styled, { css } from "styled-components";

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.typography.H400}
    line-height: 24px;
    color: ${theme.colorHeading};
    position: relative;
    width: fit-content;

    &[aria-disabled="true"] {
      color: ${theme.colors.N700};
    }
    &[aria-required="true"] {
      margin-left: 7px;
      &::before {
        content: "*";
        position: absolute;
        top: 0px;
        left: -7px;

        color: ${theme.colors.R400};
        ${theme.typography.C200}
      }
    }
  `}
`;
