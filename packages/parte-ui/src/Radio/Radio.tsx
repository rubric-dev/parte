import * as Styled from "./Radio.styled";
import { RadioProps } from "./Radio.types";
import { useContext } from "react";
import RadioGroupContext from "../RadioGroup/RadioGroupContext";

export const Radio = ({ value, label, disabled = false }: RadioProps) => {
  const {
    value: selectedValue,
    name,
    disabled: groupDisabled,
    onChange,
  } = useContext(RadioGroupContext);

  return (
    <Styled.RadioWrapper disabled={groupDisabled || disabled}>
      <Styled.Input
        type="radio"
        value={value}
        name={name}
        checked={selectedValue ? selectedValue === value : undefined}
        disabled={groupDisabled || disabled}
        onChange={(e) => {
          onChange?.(e);
        }}
      />
      <Styled.Label>{label}</Styled.Label>
    </Styled.RadioWrapper>
  );
};
