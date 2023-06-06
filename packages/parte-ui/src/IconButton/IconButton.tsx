import { forwardRef } from "react";
import { StyledButton } from "./IconButton.styled";
import { type IconButtonProps } from "./IconButton.types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ Icon, variant = "fill-primary", ...props }, ref) => {
    return (
      <StyledButton variant={variant} ref={ref} {...props}>
        {Icon}
      </StyledButton>
    );
  }
);

IconButton.displayName = "IconButton";
