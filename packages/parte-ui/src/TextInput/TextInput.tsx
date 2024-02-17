import { forwardRef } from "react";
import * as Styled from "./TextInput.styled";
import { TextInputProps } from "./TextInput.types";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const {
      leadingIcon,
      trailingIcon,
      showSpinButton = false,
      isError,
      width,
      textInputSize = "medium",
      ...inputProps
    } = props;

    return (
      <Styled.Container $width={width}>
        {leadingIcon && (
          <Styled.LeftIconContainer $disabled={inputProps.disabled}>
            {leadingIcon}
          </Styled.LeftIconContainer>
        )}
        <Styled.Input
          ref={ref}
          {...inputProps}
          data-error={isError}
          data-show-span-button={showSpinButton}
          $textInputSize={textInputSize}
          $hasLeadingIcon={!!leadingIcon}
          $hasTrailingIcon={!!trailingIcon}
        />
        {trailingIcon && (
          <Styled.RightIconContainer $disabled={inputProps.disabled}>
            {trailingIcon}
          </Styled.RightIconContainer>
        )}
      </Styled.Container>
    );
  }
);

TextInput.displayName = "TextInput";
