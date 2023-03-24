import { StyledButton } from "./IconButton.styled";
import { IconButtonProps } from "./IconButton.types";

export const IconButton = ({ Icon, ...props }: IconButtonProps) => {
  return (
    <StyledButton iconColor={Icon.props.color} {...props}>
      {Icon}
    </StyledButton>
  );
};
