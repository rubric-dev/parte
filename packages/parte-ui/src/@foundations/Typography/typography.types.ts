import { CSSProperties, PropsWithChildren } from "react";
import { Colors } from "../Colors";
import { TYPOGRAPHY } from "./typography";

export type Typography = typeof TYPOGRAPHY;

// 더 필요한 값이 있을까요?
export type CommonProps = PropsWithChildren<{
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  overrideStyles?: CSSProperties;
  color?: keyof Colors;
}>;

export type HeadlineProps = CommonProps & {
  size: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

export type ParagraphProps = CommonProps & {
  size: 100 | 200 | 300;
};

export type CaptionProps = CommonProps & {
  size: 100 | 200;
};

export type CodeProps = Omit<CommonProps, "color"> & {
  variant?: "ghost-secondary" | "default";
};
