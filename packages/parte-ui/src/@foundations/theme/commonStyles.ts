import { css } from "styled-components";
import { COLORS } from "..";

export type CommonStyles = typeof commonStyles;

export const commonStyles = {
  outline: css`
    outline: 2px solid ${COLORS.B200};
  `,
  outlineError: css`
    outline: 2px solid ${COLORS.R100};
  `,
} as const;
