import { forwardRef } from "react";
import * as Styled from "./Radio.styled";
import { RadioProps } from "./Radio.types";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, ...inputProps }, ref) => {
    return (
      <Styled.RadioWrapper>
        <Styled.Input ref={ref} type="radio" {...inputProps} />
        <Styled.Label>{label}</Styled.Label>
      </Styled.RadioWrapper>
    );
  }
);

Radio.displayName = "Radio";
