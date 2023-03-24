import styled, { css } from 'styled-components';
import { Box } from '../../Layout';
import { TagStatus } from './Tag.types';

export const Container = styled(Box)<{ status: TagStatus }>`
  ${({ theme, status }) =>
    css`
      box-sizing: border-box;
      width: fit-content;
      border-radius: 4px;
      cursor: pointer;
      ${status === 'normal' &&
      css`
        & {
          background-color: ${theme.colors.N200};
          p,
          svg {
            color: ${theme.colors.N800};
          }
          &:hover {
            p,
            svg {
              color: ${theme.colors.N600};
            }
          }
        }
      `}
      ${status === 'error' &&
      css`
        & {
          background-color: ${theme.colors.R100};
          p,
          svg {
            color: ${theme.colors.R600};
          }
          &:hover {
            p,
            svg {
              color: ${theme.colors.R400};
            }
          }
        }
      `}
      ${status === 'disabled' &&
      css`
        & {
          background-color: ${theme.colors.N100};
          cursor: default;
          p,
          svg {
            color: ${theme.colors.N500};
          }
        }
      `}
    `}
`;
