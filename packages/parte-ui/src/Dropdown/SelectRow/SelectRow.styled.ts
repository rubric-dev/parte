import styled, { css } from 'styled-components';
import { Box } from '../../Layout';
import { SelectRowProps, SelectRowType } from './SelectRow.types';

const commonSelectRowStyle = css`
  position: relative;
  align-items: center;
  padding: 0px 12px;
  width: 240px;
  min-height: 32px;
  outline: none;
  user-select: none;
  display: flex;
  gap: ${({ theme }) => `${theme.spacing.spacing8}px`};
`;
const indicator = css`
  ${({ theme }) => css`
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      border-radius: 0px 2px 2px 0px;
      background-color: ${theme.colors.B400};
      width: 2px;
    }
  `}
`;

const titleStyle = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.N0};
    color: ${theme.colors.N600};
    ${theme.typography.C200}
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.N300};
    }
  `}
`;

const searchStyle = css`
  ${({ theme }) => css`
    background-color: ${theme.colors.N50};
    ${theme.typography.C200}
    color: ${theme.colors.N600};
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.N400};
    }
  `}
`;

export const SelectRow = styled(Box)<{
  variant: SelectRowType;
  selected?: boolean;
  disabled?: boolean;
}>`
  ${commonSelectRowStyle}
  ${(props) => {
    const { variant, theme } = props;
    if (variant === 'title') {
      return css`
        ${titleStyle}
      `;
    }
    if (variant === 'element') {
      return css`
        background-color: ${theme.colorBackgroundDropdown};
        &:not(:last-child) {
          border-bottom: 1px solid ${theme.colors.N300};
        }
        color: ${theme.colors.N800};
        box-sizing: border-box;
        ${theme.typography.P100}
        cursor: pointer;

        &:hover,
        &:focus {
          ${!props.selected &&
          !props.disabled &&
          css`
            background-color: ${theme.colorBackgroundDropdownHover};
          `}
        }
        ${props.selected &&
        !props.disabled &&
        css`
          background-color: ${theme.colorBackgroundDropdownSelected};
          color: ${theme.colors.B400};
          ${indicator}
          svg {
            color: ${theme.colors.B400};
          }
        `}
        ${props.disabled &&
        css`
          background-color: ${theme.colors.N0};
          color: ${theme.colors.N500};
          cursor: default;
          svg {
            color: ${theme.colors.N400};
          }
        `}
      `;
    }
    if (variant === 'search') {
      return css`
        ${searchStyle}
      `;
    }
  }}
`;

export const SearchInput = styled.input<SelectRowProps>`
  ${({ theme }) => {
    return css`
      background-color: transparent;
      border: none;
      outline: none;
      margin-left: ${theme.spacing.spacing8}px;
      width: 100%;
      color: ${theme.colors.N800};
      &::placeholder {
        ${theme.typography.P100}
        color: ${theme.colors.N600};
      }
    `;
  }}
`;
