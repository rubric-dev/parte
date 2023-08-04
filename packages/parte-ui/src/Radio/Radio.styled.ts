import styled, { css } from "styled-components";

export const RadioWrapper = styled.label`
  ${({ theme }) => css`
    width: fit-content;
    display: flex;
    align-items: center;
    column-gap: ${theme.spacing.spacing12}px;
    cursor: pointer;

    &:has(input:disabled) {
      cursor: default;
      span {
        color: ${theme.colors.N600};
      }
    }
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
    cursor: pointer;
    background-color: ${theme.colors.N0};

    &:hover {
      border: 1px solid ${theme.colors.N600};
    }
    &:active {
      border: 1px solid ${theme.colors.N500};
      background-color: ${theme.colors.N100};
    }
    &:disabled {
      cursor: default;
      border: 1px solid ${theme.colors.N100};
      background-color: ${theme.colors.N100};
    }
    &:checked {
      border: 4px solid ${theme.colorBorderRadioChecked};
      &:hover {
        border: 4px solid ${theme.colorBorderRadioCheckedHover};
      }
      &:active {
        border: 4px solid ${theme.colorBorderRadioCheckedActive};
        background-color: ${theme.colors.transparent};
      }
      &:disabled {
        border: 4px solid ${theme.colorBorderRadioCheckedDisabled};
        background-color: ${theme.colors.N100};
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
