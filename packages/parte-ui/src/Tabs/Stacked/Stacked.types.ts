import React, { HTMLAttributes } from "react";

export type StackedVariant = "Primary" | "Secondary";
export type StackedDirection = "horizontal" | "vertical";
export type StackedSize = "medium" | "large";

export type StackedProps = HTMLAttributes<HTMLDivElement> & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  variant?: StackedVariant;
  selected?: boolean;
  disabled?: boolean;
  direction?: StackedDirection;
  size?: StackedSize;
};

export type StackedStyledProps = {
  $variant?: StackedVariant;
  $direction?: StackedDirection;
  $size?: StackedSize;
  $selected?: boolean;
  $disabled?: boolean;
};
