import { HTMLAttributes, type PropsWithChildren } from "react";
import { type ParteStyledProps } from "../../Layout/Box.types";
import { type Colors } from "../Colors";
import { TYPOGRAPHY } from "./typography";

export type Typography = typeof TYPOGRAPHY;

export type CommonProps = Pick<
  ParteStyledProps,
  "marginBottom" | "marginTop" | "marginLeft" | "marginRight"
> &
  PropsWithChildren<{
    color?: keyof Colors;
  }>;

export type HeadlineProps = HTMLAttributes<HTMLHeadingElement> &
  CommonProps & {
    size: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  };

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  CommonProps & {
    size: 100 | 200 | 300;
  };

export type CaptionProps = HTMLAttributes<HTMLSpanElement> &
  CommonProps & {
    size: 100 | 200;
  };

export type CodeProps = Omit<CommonProps, "color"> & {
  variant?: "ghost-secondary" | "default";
};
