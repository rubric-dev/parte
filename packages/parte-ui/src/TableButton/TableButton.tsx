import { StyledButton } from "./TableButton.styled";
import { TableButtonProps } from "./TableButton.types";

export const TableButton = ({
  children,
  leadingIcon,
  trailingIcon,
  variant = "primary",
  ...props
}: TableButtonProps) => {
  console.log(children);
  return (
    <StyledButton variant={variant} {...props} isIconButton={!children}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </StyledButton>
  );
};
