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
      >
        <Styled.Container>
          {leadingIcon && (
            <Styled.LeftIconContainer disabled={props.disabled}>
              {leadingIcon}
            </Styled.LeftIconContainer>
          )}
          <Styled.Input ref={ref} {...inputProps} data-error={!!errorText} />
          {trailingIcon && (
            <Styled.RightIconContainer disabled={props.disabled}>
              {trailingIcon}
            </Styled.RightIconContainer>
          )}
        </Styled.Container>
      </InputWrapper>
    );
  }
);

TextInput.displayName = "TextInput";
