import styled, { css } from "styled-components";
import { Box } from "../Layout";
import { CHECKBOX_ICON_BOX } from "../constant";

export const LabelContainer = styled.label`
  ${({ theme }) => css`
    box-sizing: border-box;
    display: flex;
    position: relative;
    align-items: center;
    column-gap: ${theme.spacing.spacing12}px;
    width: fit-content;

    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    #${CHECKBOX_ICON_BOX} {
      background-color: ${theme.colors.N0};
    }
    & svg {
      color: ${theme.colors.transparent};
    }
    &:hover #${CHECKBOX_ICON_BOX} {
      border: 1px solid ${theme.colors.N600};
    }
    &:active #${CHECKBOX_ICON_BOX} {
      border: 1px solid ${theme.colors.N500};
      background-color: ${theme.colors.N100};
    }

    &:has(input:checked) #${CHECKBOX_ICON_BOX} {
      background-color: ${theme.colorBackgroundCheckbox};
      border: none;
    }

    &:has(input:checked) {
      & svg {
        color: ${theme.colors.N0};
      }
      &:hover #${CHECKBOX_ICON_BOX} {
        background-color: ${theme.colorBackgroundCheckboxHover};
        outline: none;
      }
      &:active #${CHECKBOX_ICON_BOX} {
        background-color: ${theme.colorBackgroundCheckboxActive};
      }
    }

    &:has(input:focus) #${CHECKBOX_ICON_BOX} {
      ${theme.commonStyles.outline}
    }

    // indeterminate=true일 경우
    &:has(input[data-indeterminate="true"]) #${CHECKBOX_ICON_BOX} {
      background-color: ${theme.colorBackgroundCheckbox};
      border: none;
    }
    &:has(input[data-indeterminate="true"]) {
      &:hover #${CHECKBOX_ICON_BOX} {
        background-color: ${theme.colorBackgroundCheckboxHover};
      }
      &:active #${CHECKBOX_ICON_BOX} {
        background-color: ${theme.colorBackgroundCheckboxActive};
      }
    }

    // disabled=true일 경우
    &:has(input[type="checkbox"][disabled]) {
      cursor: default;
      span {
        color: ${theme.colors.N600};
      }
    }

    &:has(input[type="checkbox"][disabled]) #${CHECKBOX_ICON_BOX} {
      background-color: ${theme.colors.N100};
      border: none;
      & svg {
        color: ${theme.colors.N100};
      }
      div {
        background-color: ${theme.colors.N100};
      }
    }
    &:has(input[type="checkbox"][disabled]:checked) #${CHECKBOX_ICON_BOX} {
      background-color: ${theme.colorBackgroundCheckboxDisabled};
      & svg {
        color: ${theme.colors.N100};
      }
    }

    // disabled=true
    // indeterminate=true 동시에
    &:has(input[data-indeterminate="true"][disabled]) #${CHECKBOX_ICON_BOX} {
      background-color: ${theme.colorBackgroundCheckboxDisabled};
    }
  `}
`;

export const IconBox = styled(Box)<{ $size?: number }>`
  ${({ theme, $size = 16 }) => css`
    display: flex;
    width: ${$size}px;
    height: ${$size}px;
    border: 1px solid ${theme.colors.N400};
    border-radius: 4px;
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
