import React, { ReactElement } from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  leadingIcon,
  trailingIcon,
  variant = "primary",
  direction = "horizontal",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} direction={direction} {...props}>
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
};
