import { forwardRef } from "react";
import * as Styled from "./Toggle.styled";
import { ToggleProps } from "./Toggle.types";

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (props, ref) => {
    const { label, disabled, ...inputAttributes } = props;

    return (
      <Styled.Label>
        <Styled.Input
          ref={ref}
          role="switch"
          type="checkbox"
          disabled={disabled}
          {...inputAttributes}
        />
        {label}
      </Styled.Label>
    );
  }
);

Toggle.displayName = "Toggle";
