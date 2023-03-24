import { css } from "styled-components";
import { COLORS } from "../Colors";

export type BadgeColor = typeof BADGE_COLOR;
export type BadgeColors = keyof BadgeColor | "AUTO";

export const BADGE_COLOR = {
  NEUTRAL: css`
    background-color: ${COLORS.N200};
    color: ${COLORS.N800};
  `,
  BLUE: css`
    background-color: ${COLORS.B200};
    color: ${COLORS.B500};
  `,
  GREEN: css`
    background-color: ${COLORS.G200};
    color: ${COLORS.G600};
  `,
  YELLOW: css`
    background-color: ${COLORS.Y100};
    color: ${COLORS.Y600};
  `,
  RED: css`
    background-color: ${COLORS.R100};
    color: ${COLORS.R600};
  `,
  VIOLET: css`
    background-color: ${COLORS.V100};
    color: ${COLORS.V600};
  `,
  TEAL: css`
    background-color: ${COLORS.T100};
    color: ${COLORS.T600};
  `,
  PINK: css`
    background-color: ${COLORS.P100};
    color: ${COLORS.P600};
  `,
  ORANGE: css`
    background-color: ${COLORS.O100};
    color: ${COLORS.O600};
  `,
} as const;
