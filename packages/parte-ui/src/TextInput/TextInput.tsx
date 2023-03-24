import { forwardRef, useId, useState } from "react";
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
    } = props;

    const [hover, setHover] = useState(false);
    const [focused, setFocused] = useState(false);

    return (
      <Styled.Container fullWidth={fullWidth}>
        {label && (
          <Styled.LabelWrapper>
            {required && <Styled.Required>*</Styled.Required>}
            <Styled.Label
              htmlFor={id}
              title={required ? "This field is required" : ""}
            >
              {label}
            </Styled.Label>
          </Styled.LabelWrapper>
        )}
        {description && <Styled.Description>{description}</Styled.Description>}
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
        {errorText && <Styled.ErrorText>{errorText}</Styled.ErrorText>}
      </Styled.Container>
    );
  }
);
