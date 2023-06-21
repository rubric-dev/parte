import { forwardRef } from "react";
import { ActionSmallTickIcon } from "../../../parte-icons/src";
import * as Styled from "./Checkbox.styled";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, ...props }, ref) => {
    return (
      <Styled.LabelContainer>
        <Styled.Input
          ref={ref}
          type="checkbox"
          {...props}
          data-indeterminate={indeterminate}
        />
        <Styled.IconBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex="1"
        >
          {indeterminate ? (
            <Styled.Indeterminate />
          ) : (
            <ActionSmallTickIcon size={16} />
          )}
        </Styled.IconBox>
        {label && <Styled.Label>{label}</Styled.Label>}
      </Styled.LabelContainer>
    );
  }
);

Checkbox.displayName = "Checkbox";
