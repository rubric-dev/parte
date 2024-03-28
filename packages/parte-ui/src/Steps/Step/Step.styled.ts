import styled, { css } from "styled-components";
import { Box } from "../../Layout";
import { StepStatus } from "./Step.types";
import { ParteTheme } from "../../@foundations";

export const Container = styled(Box)`
  width: fit-content;
  display: flex;
  align-items: center;
  user-select: none;
`;

const getStepStatusColor = (status: StepStatus, theme: ParteTheme) => {
  switch (status) {
    case "notStarted":
      return css`
        color: ${theme.colors.N700};
        background-color: ${theme.colors.N200};
      `;
    case "inProgress":
      return css`
        color: ${theme.colorTextStep};
        background-color: ${theme.colorBackgroundStep};
      `;
    case "complete":
      return css`
        color: ${theme.colors.G500};
        background-color: ${theme.colors.G100};
      `;
  }
};

export const Icon = styled(Box)<{ $status: StepStatus }>`
  ${({ theme, $status }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 4px;

    font-weight: 600;
    font-size: 10px;
    line-height: 8px;

    ${getStepStatusColor($status, theme)}
  `}
`;
export const Label = styled.span<{ $status: StepStatus }>`
  ${({ theme, $status }) => css`
    color: ${$status === "inProgress"
      ? theme.colorTextStepLabel
      : theme.colors.N700};
    ${theme.typography.H300};
  `}
`;
