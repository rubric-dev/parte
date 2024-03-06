import { css } from "styled-components";

export type Elevation = typeof ELEVATION;
export type ElevationToken = 0 | 1 | 2 | 3;

export const ELEVATION = {
  elevation0: css`
    box-shadow: 0px 2px 6px -2px rgba(47, 70, 91, 0.15);
  `,
  elevation1: css`
    box-shadow: 0px 2px 6px rgba(67, 90, 111, 0.3);
  `,
  elevation2: css`
    box-shadow: 0px 3px 6px rgba(67, 90, 111, 0.4);
  `,
  elevation3: css`
    box-shadow: 0px 4px 10px rgba(67, 90, 111, 0.5);
  `,
} as const;
