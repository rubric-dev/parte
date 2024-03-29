import { css } from "styled-components";
import { COLORS } from "../Colors";

export type BadgeColor = typeof BADGE_COLOR;
export type BadgeColors = keyof BadgeColor | "AUTO";

export const BADGE_COLOR = {
  NEUTRAL: css`
    background-color: ${COLORS.N100};
    color: ${COLORS.N700};
  `,
  BLUE: css`
    background-color: ${COLORS.B50};
    color: ${COLORS.B400};
  `,
  GREEN: css`
    background-color: ${COLORS.G50};
    color: ${COLORS.G500};
  `,
  YELLOW: css`
    background-color: ${COLORS.Y50};
    color: ${COLORS.Y500};
  `,
  RED: css`
    background-color: ${COLORS.R50};
    color: ${COLORS.R400};
  `,
  VIOLET: css`
    background-color: ${COLORS.V50};
    color: ${COLORS.V400};
  `,
  TEAL: css`
    background-color: ${COLORS.T50};
    color: ${COLORS.T400};
  `,
  PINK: css`
    background-color: ${COLORS.P50};
    color: ${COLORS.P400};
  `,
  ORANGE: css`
    background-color: ${COLORS.O50};
    color: ${COLORS.O400};
  `,
} as const;
