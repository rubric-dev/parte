import styled, { css } from "styled-components";
import { LinkProps } from "./Link.types";

export const Link = styled.a<LinkProps>`
  ${({ theme, size = 400 }) => {
    let typo;
    switch (size) {
      case 500:
        typo = theme.typography.H500;
        break;
      case 300:
        typo = theme.typography.H300;
        break;
      case 400:
      default:
        typo = theme.typography.H400;
        break;
    }
    return css`
      color: ${theme.colorTextLink};
      ${typo}
      cursor: pointer;

      &:hover {
        color: ${theme.colorTextLinkHover};
      }
      &:active {
        color: ${theme.colorTextLinkPressed};
      }
      &:focus {
        color: ${theme.colorTextLinkFocused};
        ${theme.commonStyles.outline};
        border-radius: ${theme.spacing.spacing4}px;
      }
      &:visited {
        color: ${theme.colorTextLinkVisited};
      }
      &[data-disabled="true"] {
        ${theme.typography.H400};
        color: ${theme.colorTextLinkDisabled};
        cursor: default;
        pointer-events: none;
      }
    `;
  }}
`;
