import { forwardRef, useId, useState } from "react";
import { InputWrapper } from "../InputWrapper";
import * as Styled from "./TextInput.styled";
import { TextInputProps } from "./TextInput.types";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const id = useId();
    const {
      label,
      description,
      required = false,
      leadingIcon,
      trailingIcon,
      errorText,
      disabled,
      onFocus,
      onBlur,
      fullWidth,
      direction,
    } = props;

    const [hover, setHover] = useState(false);
    const [focused, setFocused] = useState(false);

    return (
      <InputWrapper
        label={label}
        description={description}
        required={required}
        fullWidth={fullWidth}
        errorText={errorText}
        direction={direction}
      >
        <Styled.InputWrapper
          {...props}
          hover={hover}
          focused={focused}
          disabled={disabled}
          error={!!errorText}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          id="parte-text-input-wrapper"
        >
          {leadingIcon && (
            <Styled.LeftIconContainer disabled={props.disabled}>
              {leadingIcon}
            </Styled.LeftIconContainer>
          )}
          <Styled.Input
            ref={ref}
            id={id}
            {...props}
            onFocus={(e) => {
              onFocus?.(e);
              setFocused(true);
            }}
            onBlur={(e) => {
              onBlur?.(e);
              setFocused(false);
            }}
          />
          {trailingIcon && (
            <Styled.RightIconContainer disabled={props.disabled}>
              {trailingIcon}
            </Styled.RightIconContainer>
          )}
        </Styled.InputWrapper>
      </InputWrapper>
    );
  }
);

TextInput.displayName = "TextInput";
