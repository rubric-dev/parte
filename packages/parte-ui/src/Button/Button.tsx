import React, { PropsWithChildren, ReactElement, forwardRef } from "react";
import { StyledButton, StyledLinkButton } from "./Button.styled";
import {
  ButtonProps,
  ButtonStylingProps,
  LinkButtonProps,
} from "./Button.types";

export const ButtonChildren = ({
  leadingIcon,
  direction,
  trailingIcon,
  children,
}: PropsWithChildren<ButtonStylingProps>) => {
  return (
    <>
      {leadingIcon &&
        React.cloneElement(leadingIcon as ReactElement, {
          size: direction === "horizontal" ? 12 : 16,
        })}
      {children}
      {trailingIcon &&
        React.cloneElement(trailingIcon as ReactElement, {
          size: direction === "horizontal" ? 12 : 16,
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
      direction = "horizontal",
      fullWidth,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        $variant={variant}
        $direction={direction}
        $fullWidth={fullWidth}
        ref={ref}
        {...props}
      >
        <ButtonChildren
          trailingIcon={trailingIcon}
          leadingIcon={leadingIcon}
          direction={direction}
        >
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
      direction = "horizontal",
      fullWidth,
      ...props
    },
    ref
  ) => {
    return (
      <StyledLinkButton
        $variant={variant}
        $direction={direction}
        $fullWidth={fullWidth}
        ref={ref}
        {...props}
      >
        <ButtonChildren
          trailingIcon={trailingIcon}
          leadingIcon={leadingIcon}
          direction={direction}
        >
          {children}
        </ButtonChildren>
      </StyledLinkButton>
    );
  }
);
LinkButton.displayName = "LinkButton";
