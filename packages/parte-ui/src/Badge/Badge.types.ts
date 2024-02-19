import { BadgeColors } from "../@foundations";
import { ExtractToStyledProps } from "@parte-ds/utils";

export type BadgeType = "badge" | "pills";
export type BadgeSize = "small" | "medium";

export type BadgeProps = {
  type?: BadgeType;
  badgeColor?: BadgeColors;
  text?: string;
  size?: BadgeSize;
};

export type BadgeStyleProps = ExtractToStyledProps<
  BadgeProps,
  "type" | "badgeColor" | "size"
>;
