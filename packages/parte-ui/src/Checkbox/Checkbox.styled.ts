import styled, { css } from "styled-components";
import { Box } from "../Layout";

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

    & svg {
      color: ${theme.colors.N0};
    }
    &:hover > div {
      border: 1px solid ${theme.colors.N600};
    }
    &:active > div {
      border: 1px solid ${theme.colors.N500};
      background-color: ${theme.colors.N100};
    }

    &:has(input:checked) > div {
      background-color: ${theme.colors.T400};
      border: none;
    }

    &:has(input:checked) {
      &:hover > div {
        background-color: ${theme.colors.T500};
        outline: none;
      }
      &:active > div {
        background-color: ${theme.colors.T600};
      }
    }

    &:has(input:focus) > div {
      ${theme.commonStyles.outline}
    }

    // indeterminate=true일 경우
    &:has(input[data-indeterminate="true"]) > div {
      background-color: ${theme.colors.T400};
      border: none;
    }
    &:has(input[data-indeterminate="true"]) {
      &:hover > div {
        background-color: ${theme.colors.T500};
      }
      &:active > div {
        background-color: ${theme.colors.T600};
      }
    }

    // disabled=true일 경우
    &:has(input[type="checkbox"][disabled]) {
      cursor: default;
    }

    &:has(input[type="checkbox"][disabled]) > div {
      border: 1px solid ${theme.colors.N100};
      background-color: ${theme.colors.N100};
      & svg {
        color: ${theme.colors.N100};
      }
      div {
        background-color: ${theme.colors.N500};
      }
    }
    &:has(input[type="checkbox"][disabled]:checked) > div {
      border: 1px solid ${theme.colors.N100};
      background-color: ${theme.colors.N100};
      & svg {
        color: ${theme.colors.N500};
      }
    }
  `}
`;

export const IconBox = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    width: 16px;
    height: 16px;
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
