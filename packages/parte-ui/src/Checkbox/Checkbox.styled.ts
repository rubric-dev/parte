import styled, { css } from "styled-components";
import { Box } from "../Layout";

export const Container = styled.label<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    box-sizing: border-box;
    display: flex;
    flex: 1;
    align-items: center;
    column-gap: ${theme.spacing.spacing12}px;
    cursor: ${disabled ? "default" : "pointer"};
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `}
`;

export const Checkbox = styled(Box)<{
  disabled: boolean;
  hover: boolean;
  checked: boolean;
  pressed: boolean;
}>`
  ${({ theme, hover, checked, disabled, pressed }) => css`
    width: 16px;
    height: 16px;
    border-radius: 4px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid ${theme.colors.N400};
    display: flex;
    & svg {
      color: ${theme.colors.N0};
    }
    ${hover &&
    css`
      border: 1px solid ${theme.colors.N600};
    `}
    ${pressed &&
    css`
      border: 1px solid ${theme.colors.N500};
      background-color: ${theme.colors.N100};
    `}
    ${disabled &&
    css`
      border: 1px solid ${theme.colors.N100};
      background-color: ${theme.colors.N100};
      & svg {
        color: ${theme.colors.N500};
      }
    `}
    ${checked &&
    css`
      background-color: ${theme.colors.T400};
      border: none;
      ${hover &&
      css`
        background-color: ${theme.colors.T500};
      `}
      ${pressed &&
      css`
        background-color: ${theme.colors.T600};
      `}
    ${disabled &&
      css`
        background-color: ${theme.colors.N100};
      `}
    `}
  `}
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const Label = styled.span`
  ${({ theme }) =>
    css`
      ${theme.typography.P200}
      color:${theme.colors.N800};
    `}
`;

export const Indeterminate = styled.div`
  ${({ theme }) =>
    css`
      width: 8px;
      height: 2px;
      border-radius: 1px;
      background-color: ${theme.colors.N0};
    `}
`;
