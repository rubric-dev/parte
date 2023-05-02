import { StyledButton } from "./TableButton.styled";
import { TableButtonProps } from "./TableButton.types";

export const TableButton = ({
  children,
  leadingIcon,
  trailingIcon,
  variant = "fill-primary",
  ...props
}: TableButtonProps) => {
  return (
    <StyledButton variant={variant} {...props} isIconButton={!children}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </StyledButton>
  );
};
