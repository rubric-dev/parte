import styled, { css } from "styled-components";

export const Label = styled.label`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing.spacing12}px;
    cursor: pointer;

    ${theme.typography.P200}
    color: ${theme.colors.N800};

    &:has(input:disabled) {
      cursor: default;
      color: ${theme.colors.N600};
    }
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
      background-color: ${theme.colorBackgroundToggle};
      &::before {
        left: 14px;
      }
      &:hover {
        background-color: ${theme.colorBackgroundToggleHover};
      }
      &:active {
        background-color: ${theme.colorBackgroundToggleActive};
      }
    }
    &:disabled {
      cursor: default;
      background-color: ${theme.colors.N100};
      &::before {
        background-color: ${theme.colors.N400};
      }
    }

    &:checked:disabled {
      cursor: default;
      background-color: ${theme.colorBackgroundToggleDisabled};
      &::before {
        background-color: ${theme.colors.N100};
      }
    }
  `}
`;
