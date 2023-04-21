import styled, { css } from "styled-components";

export const Container = styled.label<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.spacing12}px;
    cursor: ${disabled ? "default" : "pointer"};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    margin: 0;
    position: relative;
    border-radius: 8px;
    box-sizing: border-box;
    width: 28px;
    height: 16px;
    background-color: ${theme.colors.N400};
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      left: 2px;
      top: 2px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${theme.colors.N0};
      transition: left 150ms linear;
    }
    &:hover {
      background-color: ${theme.colors.N500};
    }
    &:active {
      background-color: ${theme.colors.N600};
    }

    &:checked {
      background-color: ${theme.colors.PRIMARY400};
      &::before {
        left: 14px;
      }
      &:hover {
        background-color: ${theme.colors.PRIMARY500};
      }
      &:active {
        background-color: ${theme.colors.PRIMARY600};
      }
    }
    &:disabled,
    &:checked:disabled {
      cursor: default;
      background-color: ${theme.colors.N100};
      &::before {
        background-color: ${theme.colors.N400};
      }
    }
  `}
`;

export const Label = styled.span`
  ${({ theme }) => css`
    ${theme.typography.P200};
    color: ${theme.colors.N800};
  `}
`;
