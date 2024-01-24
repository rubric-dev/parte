import { forwardRef } from "react";
import { StyledButton } from "./TableButton.styled";
import { TableButtonProps } from "./TableButton.types";

export const TableButton = forwardRef<HTMLButtonElement, TableButtonProps>(
  (
    {
      variant = "fill-primary",
      fullWidth,
      children,
      leadingIcon,
      trailingIcon,
      ...buttonAttributes
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $fullWidth={fullWidth}
        $isIconButton={!children}
        {...buttonAttributes}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </StyledButton>
    );
  }
);

TableButton.displayName = "TableButton";
