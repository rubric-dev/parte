import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  leadingIcon,
  trailingIcon,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </StyledButton>
  );
};
