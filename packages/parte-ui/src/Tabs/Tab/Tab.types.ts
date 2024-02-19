import React, { HTMLAttributes } from "react";

export type TabVariant = "Primary" | "Secondary";
export type TabDirection = "horizontal" | "vertical";
export type TabSize = "medium" | "large";

export type TabProps = HTMLAttributes<HTMLDivElement> & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  variant?: TabVariant;
  selected?: boolean;
  disabled?: boolean;
  direction?: TabDirection;
  size?: TabSize;
};

export type TabStyledProps = {
  $variant?: TabVariant;
  $direction?: TabDirection;
  $size?: TabSize;
  $selected?: boolean;
  $disabled?: boolean;
};
