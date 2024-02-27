import { css } from "styled-components";

export type Elevation = typeof ELEVATION;
export type ElevationToken = 0 | 1 | 2 | 3;

export const ELEVATION = {
  elevation0: css`
    box-shadow: 0px 0px 1px 0px #1018404d, 0px 2px 4px -2px #435a6f78;
  `,
  elevation1: css`
    box-shadow: 0px 0px 1px 0px #1018404d, 0px 5px 8px -4px #435a6f78;
  `,
  elevation2: css`
    box-shadow: 0px 0px 1px 0px #1018404d, 0px 8px 10px -4px #435a6f78;
  `,
  elevation3: css`
    box-shadow: 0px 0px 1px 0px #1018404d, 0px 16px 24px -8px #435a6f78;
  `,
  elevation4: css`
    box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
  `,
} as const;
