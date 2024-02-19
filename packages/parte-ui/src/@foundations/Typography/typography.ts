import { css } from "styled-components";
import { COLORS } from "../Colors";

const commonBaseTextStyle = css`
  font-style: normal;
`;

const commonCodeStyle = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 4px 8px;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const TYPOGRAPHY = {
  H900: css`
    ${commonBaseTextStyle}
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
  `,
  H800: css`
    ${commonBaseTextStyle}
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  `,
  H700: css`
    ${commonBaseTextStyle}
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  `,
  H600: css`
    ${commonBaseTextStyle}
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  `,
  H500: css`
    ${commonBaseTextStyle}
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  `,
  H400: css`
    ${commonBaseTextStyle}
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  `,
  H300: css`
    ${commonBaseTextStyle}
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  `,
  H200: css`
    ${commonBaseTextStyle}
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  `,
  H100: css`
    ${commonBaseTextStyle}
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
  `,
  P300: css`
    ${commonBaseTextStyle}
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  `,
  P200: css`
    ${commonBaseTextStyle}
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  P100: css`
    ${commonBaseTextStyle}
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  `,
  C300: css`
    ${commonBaseTextStyle}
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  `,
  C200: css`
    ${commonBaseTextStyle}
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  `,
  C100: css`
    ${commonBaseTextStyle}
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
  `,
  CD200: css`
    ${commonCodeStyle}
    color: ${COLORS.N800};
    background-color: ${COLORS.N50};
    border: 1px solid ${COLORS.N400};
  `,
  CM200: css`
    ${commonCodeStyle}
    color: ${COLORS.B600};
    background-color: ${COLORS.B50};
    border: 1px solid ${COLORS.B200};
  `,
};
