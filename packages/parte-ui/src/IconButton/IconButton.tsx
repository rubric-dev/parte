import { forwardRef } from "react";
import { StyledButton } from "./IconButton.styled";
import { IconButtonProps } from "./IconButton.types";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ Icon, variant = "fill-primary", ...props }, ref) => {
    return (
      <StyledButton
        iconColor={Icon.props.color}
        variant={variant}
        {...props}
        ref={ref}
      >
        {Icon}
      </StyledButton>
    );
  }
);

IconButton.displayName = "IconButton";
