import { forwardRef, useId, useState } from "react";
import { InputWrapper } from "../InputWrapper";
import * as Styled from "./Textarea.styled";
import { TextAreaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const id = useId();
    const {
      label,
      description,
      required = false,
      errorText,
      onFocus,
      onBlur,
      disabled,
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
      >
        <Styled.TextareaWrapper
          hover={hover}
          disabled={disabled}
          focused={focused}
          error={!!errorText}
        >
          <Styled.Textarea
            id={id}
            ref={ref}
            hover={hover}
            focused={focused}
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
