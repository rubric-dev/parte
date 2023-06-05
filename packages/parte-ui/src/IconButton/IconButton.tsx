import { forwardRef } from "react";
import { StyledButton } from "./IconButton.styled";
import { IconButtonProps } from "./IconButton.types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ Icon, variant = "fill-primary", onClick, ...props }, ref) => {
    return (
      <StyledButton
        iconColor={Icon.props.color}
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
