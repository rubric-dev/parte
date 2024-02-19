import React, { PropsWithChildren, ReactElement, forwardRef } from "react";
import { StyledButton, StyledLinkButton } from "./Button.styled";
import {
  ButtonProps,
  ButtonStylingProps,
  LinkButtonProps,
} from "./Button.types";

export const ButtonChildren = ({
  leadingIcon,
  trailingIcon,
  children,
}: PropsWithChildren<ButtonStylingProps>) => {
  return (
    <>
      {leadingIcon &&
        React.cloneElement(leadingIcon as ReactElement, {
          size: 16,
        })}
      {children}
      {trailingIcon &&
        React.cloneElement(trailingIcon as ReactElement, {
          size: 16,
        })}
    </>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      leadingIcon,
      trailingIcon,
      variant = "fill-primary",
      fullWidth,
      size = "medium",
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        $variant={variant}
        $fullWidth={fullWidth}
        $size={size}
        ref={ref}
        {...props}
      >
        <ButtonChildren trailingIcon={trailingIcon} leadingIcon={leadingIcon}>
          {children}
        </ButtonChildren>
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      leadingIcon,
      trailingIcon,
      variant = "fill-primary",
      fullWidth,
      ...props
    },
    ref
  ) => {
    return (
      <StyledLinkButton
        $variant={variant}
        $fullWidth={fullWidth}
        ref={ref}
        {...props}
      >
        <ButtonChildren trailingIcon={trailingIcon} leadingIcon={leadingIcon}>
          {children}
        </ButtonChildren>
      </StyledLinkButton>
    );
  }
);
LinkButton.displayName = "LinkButton";
