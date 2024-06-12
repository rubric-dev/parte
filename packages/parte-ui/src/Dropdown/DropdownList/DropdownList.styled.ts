import styled, { css } from "styled-components";
import { Box } from "../../Layout";

export const List = styled(Box)<{ $isFirst: boolean }>`
  ${({ theme, $isFirst }) => {
    return css`
      box-sizing: border-box;
      border: 1px solid ${theme.colors.N200};
      border-radius: 8px;
      box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
      max-height: 273px;
      overflow-x: hidden;
      overflow-y: auto;
      padding-top: ${$isFirst ? "8px" : "0"};
      padding-bottom: 8px;
      background-color: ${theme.colors.N0};
    `;
  }}
`;

export const NoOption = styled(Box)`
  ${({ theme }) => css`
    width: 100%;
    height: 120px;
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
    border-radius: 4px;
    ${theme.typography.P100}
    color: ${theme.colors.N800};
  `}
`;
