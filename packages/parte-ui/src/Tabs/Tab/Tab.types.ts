import React, { ButtonHTMLAttributes } from "react";

export type TabVariant = "Primary" | "Secondary";
export type TabDirection = "horizontal" | "vertical";

export type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: TabVariant;
  selected?: boolean;
  disabled?: boolean;
  direction?: TabDirection;
};
