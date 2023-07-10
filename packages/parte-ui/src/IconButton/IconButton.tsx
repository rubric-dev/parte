import { forwardRef } from "react";
import { StyledButton } from "./IconButton.styled";
import { type IconButtonProps } from "./IconButton.types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ Icon, variant = "fill-primary", size, ...buttonAttributes }, ref) => {
    return (
      <StyledButton
        $variant={variant}
        $size={size}
        ref={ref}
        {...buttonAttributes}
      >
        {Icon}
      </StyledButton>
    );
  }
);

IconButton.displayName = "IconButton";
