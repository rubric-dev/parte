import { BadgeColors } from "../@foundations";
import { ExtractToStyledProps } from "@parte-ds/utils";

export type AvatarShape = "CIRCLE" | "SQUARE";

export type AvatarSize = "small" | "medium";

export type AvatarProps = {
  avatarColor?: BadgeColors;
  size?: AvatarSize;
  shape?: AvatarShape;
  name?: string;
  showInitial?: boolean;
  src?: string;
};

export type AvatarStyleProps = ExtractToStyledProps<
  AvatarProps,
  "avatarColor" | "size" | "shape"
>;
