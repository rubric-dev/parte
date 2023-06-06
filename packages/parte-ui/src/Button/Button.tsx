import React, { ReactElement, forwardRef } from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      leadingIcon,
      trailingIcon,
      variant = "fill-primary",
      direction = "horizontal",
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        variant={variant}
        direction={direction}
        ref={ref}
        {...props}
      >
        {leadingIcon &&
          React.cloneElement(leadingIcon as ReactElement, {
            size: direction === "horizontal" ? 12 : 16,
          })}
        {children}
        {trailingIcon &&
          React.cloneElement(trailingIcon as ReactElement, {
            size: direction === "horizontal" ? 12 : 16,
          })}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
