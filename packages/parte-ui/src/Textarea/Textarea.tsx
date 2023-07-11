import { forwardRef } from "react";
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
      disabled,
      id,
      direction,
      width,
      resizable: resizableProp,
      ...textareaAttributes
    } = props;

    const resizable = width ? false : resizableProp ?? true;
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
        <Styled.Textarea
          ref={ref}
          id={id}
          disabled={disabled}
          data-error={errorText ? true : undefined}
          $resizable={resizable}
          {...textareaAttributes}
        />
      </InputWrapper>
    );
  }
);

Textarea.displayName = "Textarea";
