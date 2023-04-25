import styled, { css } from "styled-components";

export const RadioWrapper = styled.label<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    display: flex;
    align-items: center;
    column-gap: ${theme.spacing.spacing12}px;
    cursor: ${disabled ? "default" : "pointer"};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    margin: 0;
    vertical-align: middle;
    appearance: none;
    box-sizing: border-box;
    border: 1px solid ${theme.colors.N400};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    &:hover {
      border: 1px solid ${theme.colors.N600};
    }
    &:active {
      border: 1px solid ${theme.colors.N500};
      background-color: ${theme.colors.N100};
    }
    &:disabled {
      border: 1px solid ${theme.colors.N100};
      background-color: ${theme.colors.N100};
    }
    &:checked {
      border: 4px solid ${theme.colors.T400};
      &:hover {
        border: 4px solid ${theme.colors.T500};
      }
      &:active {
        border: 4px solid ${theme.colors.T600};
        background-color: ${theme.colors.transparent};
      }
      &:disabled {
        border: 4px solid ${theme.colors.N100};
        background-color: ${theme.colors.N500};
      }
    }
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    ${theme.typography.P200};
    color: ${theme.colors.N800};
    vertical-align: middle;
  `}
`;
