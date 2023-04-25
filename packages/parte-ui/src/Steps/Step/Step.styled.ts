import styled, { css } from "styled-components";
import { Box } from "../../Layout";
import { StepStatus } from "./Step.types";

export const Container = styled(Box)`
  width: fit-content;
  display: flex;
  align-items: center;
  user-select: none;
`;
export const Icon = styled(Box)<{ status: StepStatus }>`
  ${({ theme, status }) => css`
    display: flex;
    justify-content: center;
    width: 16px;
    height: 16px;
    align-items: center;
    border-radius: 4px;
    // 타이포그래피에 없는 글자 포맷이네요
    font-weight: 600;
    font-size: 10px;
    line-height: 8px;

    ${status === "notStarted" &&
    css`
      color: ${theme.colors.N700};
      background-color: ${theme.colors.N200};
    `}
    ${status === "inProgress" &&
    css`
      color: ${theme.colors.T500};
      background-color: ${theme.colors.T200};
    `}
      ${status === "complete" &&
    css`
      background-color: ${theme.colors.G200};
    `}
  `}
`;
export const Label = styled.span<{ status: StepStatus }>`
  ${({ theme, status }) => css`
    color: ${theme.colors.N700};
    ${theme.typography.H300};
    ${status === "inProgress" &&
    css`
      color: ${theme.colors.T400};
    `}
  `}
`;
