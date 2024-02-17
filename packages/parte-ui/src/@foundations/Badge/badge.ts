import { css } from "styled-components";
import { COLORS } from "../Colors";

export type BadgeColor = typeof BADGE_COLOR;
export type BadgeColors = keyof BadgeColor | "AUTO";

export const BADGE_COLOR = {
  NEUTRAL: css`
    background-color: ${COLORS.N200};
    color: ${COLORS.N700};
  `,
  BLUE: css`
    background-color: ${COLORS.B100};
    color: ${COLORS.B400};
  `,
  GREEN: css`
    background-color: ${COLORS.G100};
    color: ${COLORS.G400};
  `,
  YELLOW: css`
    background-color: ${COLORS.Y100};
    color: ${COLORS.Y400};
  `,
  RED: css`
    background-color: ${COLORS.R100};
    color: ${COLORS.R400};
  `,
  VIOLET: css`
    background-color: ${COLORS.V100};
    color: ${COLORS.V400};
  `,
  TEAL: css`
    background-color: ${COLORS.T100};
    color: ${COLORS.T400};
  `,
  PINK: css`
    background-color: ${COLORS.P100};
    color: ${COLORS.P400};
  `,
  ORANGE: css`
    background-color: ${COLORS.O100};
    color: ${COLORS.O400};
  `,
  GREY: css`
    background-color: ${COLORS.N400};
    color: ${COLORS.N0};
  `,
} as const;
