import { forwardRef } from "react";
import { InputWrapper } from "../InputWrapper";
import * as Styled from "./TextInput.styled";
import { TextInputProps } from "./TextInput.types";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const {
      label,
      description,
      required = false,
      errorText,
      width,
      direction,
      leadingIcon,
      trailingIcon,
      showSpinButton = false,
      ...inputProps
    } = props;

    return (
      <InputWrapper
        label={label}
        description={description}
        required={required}
        errorText={errorText}
        direction={direction}
        width={width}
        disabled={inputProps.disabled}
        id={inputProps.id}
      >
        <Styled.Container>
          {leadingIcon && (
            <Styled.LeftIconContainer $disabled={inputProps.disabled}>
              {leadingIcon}
            </Styled.LeftIconContainer>
          )}
          <Styled.Input
            ref={ref}
            {...inputProps}
            data-error={!!errorText}
            data-show-span-button={showSpinButton}
            $hasLeadingIcon={!!leadingIcon}
          />
          {trailingIcon && (
            <Styled.RightIconContainer $disabled={inputProps.disabled}>
              {trailingIcon}
            </Styled.RightIconContainer>
          )}
        </Styled.Container>
      </InputWrapper>
    );
  }
);

TextInput.displayName = "TextInput";
