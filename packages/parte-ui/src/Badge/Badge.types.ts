import { BadgeColors } from "../@foundations";
import { ExtractToStyledProps } from "@parte-ds/utils";

export type BadgeType = "badge" | "pills";

export type BadgeProps = {
  type?: BadgeType;
  badgeColor?: BadgeColors;
  text?: string;
};

export type BadgeStyleProps = ExtractToStyledProps<
  BadgeProps,
  "type" | "badgeColor"
>;
