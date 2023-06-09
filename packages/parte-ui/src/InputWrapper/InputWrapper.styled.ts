import styled, { css } from "styled-components";
import { Box } from "../Layout";
import { InputWrapperProps } from "./InputWrapper.types";
import { getWidthStyle } from "../utils/style.util";

export const Container = styled(Box)<Pick<InputWrapperProps, "children">>`
  ${({ width = "100%" }) => css`
    display: flex;
    box-sizing: border-box;
    ${getWidthStyle(width)};
  `};
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.typography.H400}
    color: ${theme.colorHeading};
    &[data-hasid="true"] {
      cursor: pointer;
    }
    &[data-disabled="true"] {
      color: ${theme.colors.N700};
      cursor: default;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.typography.P100}
    color: ${theme.colors.N700};
    margin-bottom: ${theme.spacing.spacing2}px;
  `}
`;

export const ErrorText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.P100};
    color: ${theme.colors.R400};
    margin-top: ${theme.spacing.spacing2}px;
  `}
`;
