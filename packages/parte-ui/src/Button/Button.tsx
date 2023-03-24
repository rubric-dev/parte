import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  leadingIcon,
  trailingIcon,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </StyledButton>
  );
};
