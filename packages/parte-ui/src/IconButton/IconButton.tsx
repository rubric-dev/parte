import { forwardRef } from "react";
import { StyledButton } from "./IconButton.styled";
import { type IconButtonProps } from "./IconButton.types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ Icon, variant = "fill-primary", onClick, ...props }, ref) => {
    return (
      <StyledButton
        variant={variant}
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.(e);
        }}
        {...props}
      >
        {Icon}
      </StyledButton>
    );
  }
);

IconButton.displayName = "IconButton";
