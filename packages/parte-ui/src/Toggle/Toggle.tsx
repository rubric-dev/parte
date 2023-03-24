import * as Styled from "./Toggle.styled";
import { ToggleProps } from "./Toggle.types";

export const Toggle = (props: ToggleProps) => {
  const { label, disabled = false, on, onChange } = props;

  return (
    <Styled.Container disabled={disabled}>
      <Styled.Input
        role="switch"
        type="checkbox"
        disabled={disabled}
        checked={on}
        onChange={() => onChange(!on)}
      />
      {label && <Styled.Label>{label}</Styled.Label>}
    </Styled.Container>
  );
};
