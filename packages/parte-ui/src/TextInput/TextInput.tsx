import { forwardRef } from "react";
import * as Styled from "./TextInput.styled";
import { TextInputProps } from "./TextInput.types";
import { CaretDownIcon } from "../../../parte-icons/src";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const {
      leadingIcon,
      trailingIcon,
      showSpinButton = false,
      isError,
      width,
      textInputSize = "medium",
      variant = "text",
      ...inputProps
    } = props;

    return (
      <Styled.Container
        $width={width}
        $variant={variant}
        $textInputSize={textInputSize}
      >
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
          $variant={variant}
        />
        {trailingIcon && (
          <Styled.RightIconContainer $disabled={inputProps.disabled}>
            {trailingIcon}
          </Styled.RightIconContainer>
        )}
        {variant === "select" && (
          <Styled.RightIconContainer $disabled={inputProps.disabled}>
            <CaretDownIcon size={12} color="N600" />
          </Styled.RightIconContainer>
        )}
      </Styled.Container>
    );
  }
);

TextInput.displayName = "TextInput";
