import { forwardRef, useId, useState } from "react";
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
      fullWidth,
      onFocus,
      onBlur,
      disabled,
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
        <Styled.TextareaWrapper
          hover={hover}
          disabled={disabled}
          focused={focused}
          error={!!errorText}
          fullWidth={fullWidth}
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

        {errorText && <Styled.ErrorText>{errorText}</Styled.ErrorText>}
      </Styled.Container>
    );
  }
);
