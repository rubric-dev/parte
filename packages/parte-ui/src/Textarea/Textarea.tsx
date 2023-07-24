import { forwardRef } from "react";
import * as Styled from "./Textarea.styled";
import { TextAreaProps } from "./Textarea.types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props: TextAreaProps, ref) => {
    const {
      isError,
      disabled,
      width,
      resizable: resizableProp,
      ...textareaAttributes
    } = props;

    const resizable = width ? false : resizableProp ?? true;
    return (
      <Styled.Textarea
        ref={ref}
        disabled={disabled}
        data-error={isError ? true : undefined}
        $resizable={resizable}
        $width={width}
        {...textareaAttributes}
      />
    );
  }
);

Textarea.displayName = "Textarea";
