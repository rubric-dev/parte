import styled, { css } from "styled-components";
import { Box } from "../Layout";
import { InputWrapperProps } from "./InputWrapper.types";

export const Container = styled(Box)<
  Pick<InputWrapperProps, "fullWidth" | "children">
>`
  ${({ fullWidth, width = "fit-content" }) => css`
    display: flex;
    box-sizing: border-box;
    width: ${fullWidth ? "100%" : width};
  `};
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.typography.H400}
    color: ${theme.colorHeading};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${theme.typography.P100}
    color: ${theme.colorParagraph};
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
