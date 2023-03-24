import styled, { css } from 'styled-components';
import { Box } from '../Layout';

export const DialogContainer = styled(Box)`
  ${({ theme }) => css`
    background-color: ${theme.colors.N0};
    display: flex;
    height: fit-content;
  `}
`;
export const Header = styled(Box)`
  width: 100%;
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.typography.H600};
    color: ${theme.colors.N900};
  `}
`;

export const Content = styled(Box)`
  ${({ theme }) => css`
    ${theme.typography.P200};
    color: ${theme.colors.N700};
    padding: ${theme.spacing.spacing8}px ${theme.spacing.spacing32}px;
    overflow: auto;
    width: 100%;
  `}
`;

export const Footer = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacing.spacing32}px;
    padding-top: ${theme.spacing.spacing24}px;
    justify-content: flex-end;
    width: 100%;
    gap: ${theme.spacing.spacing8}px;
  `}
`;
