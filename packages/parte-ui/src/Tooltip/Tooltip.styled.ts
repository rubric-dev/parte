import styled, { css } from 'styled-components';

export const TargetWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.N800};
    padding: 8px 16px;
    border-radius: 8px;
    color: ${theme.colors.N0};
    max-width: 232px;
    box-shadow: 0px 4px 8px rgba(16, 24, 64, 0.08);
    width: fit-content;
    font-size: 12px;
  `}
`;
