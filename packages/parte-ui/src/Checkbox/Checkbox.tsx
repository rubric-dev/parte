import { useState } from "react";
import * as Styled from "./Checkbox.styled";
import { CheckboxProps } from "./Checkbox.types";
import { Box } from "../Layout";
import { ActionSmallTickIcon } from "../../../parte-icons/src";

export const Checkbox = ({
  label,
  disabled = false,
  checked = false,
  indeterminate = false,
  onChange,
}: CheckboxProps) => {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const renderIcon = () => {
    if (indeterminate) {
      return <Styled.Indeterminate />;
    }
    if (checked) {
      return <ActionSmallTickIcon size={16} />;
    }
    return <></>;
  };

  return (
    <Styled.Container
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <Styled.Checkbox
        hover={hover}
        pressed={pressed}
        checked={checked || indeterminate}
        disabled={disabled}
        alignItems="center"
      >
        <Styled.Input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => {
            onChange?.(e);
          }}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex="1"
        >
          {renderIcon()}
        </Box>
      </Styled.Checkbox>
      {label && <Styled.Label>{label}</Styled.Label>}
    </Styled.Container>
  );
};
