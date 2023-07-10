import { StyledButton } from "./TableButton.styled";
import { TableButtonProps } from "./TableButton.types";

export const TableButton = ({
  children,
  leadingIcon,
  trailingIcon,
  variant = "fill-primary",
  fullWidth,
  ...buttonAttributes
}: TableButtonProps) => {
  return (
    <StyledButton
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
};
