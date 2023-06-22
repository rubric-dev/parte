import { forwardRef, useState } from "react";
import { InputWrapper } from "../InputWrapper";
import * as Styled from "./Textarea.styled";
import { TextAreaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const {
      label,
      description,
      required = false,
      errorText,
      onFocus,
      onBlur,
      disabled,
      id,
      direction,
      width,
    } = props;

    const [hover, setHover] = useState(false);
    const [focused, setFocused] = useState(false);

    return (
      <InputWrapper
        label={label}
        description={description}
        required={required}
        errorText={errorText}
        direction={direction}
        width={width}
        disabled={disabled}
        id={id}
      >
        <Styled.TextareaWrapper
          hover={hover}
          disabled={disabled}
          focused={focused}
          error={!!errorText}
        >
          <Styled.Textarea
            ref={ref}
            hover={hover}
            focused={focused}
            id={id}
            {...props}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={(e) => {
              onFocus?.(e);
              setFocused(true);
            }}
            onBlur={(e) => {
              onBlur?.(e);
              setFocused(false);
            }}
          />
        </Styled.TextareaWrapper>
      </InputWrapper>
    );
  }
);

Textarea.displayName = "Textarea";
