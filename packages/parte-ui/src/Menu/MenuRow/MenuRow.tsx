import { MouseEvent, useState } from "react";
import { MenuRowProps } from "./MenuRow.types";
import * as Styled from "./MenuRow.styled";
import { Checkbox } from "../../Checkbox";

export function MenuRow(props: MenuRowProps) {
  const [hover, setHover] = useState(false);
  const {
    type = "element",
    onSelect,
    leadingIcon,
    children,
    selected,
    disabled,
    width = 180,
  } = props;

  return (
    <Styled.Container
      type={type}
      hover={hover}
      width={width}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={(e: MouseEvent) => {
        e.preventDefault();
        !disabled && onSelect?.();
      }}
      {...props}
    >
      {type === "element" && leadingIcon && (
        <Styled.Icon selected={selected} disabled={disabled}>
          {leadingIcon}
        </Styled.Icon>
      )}
      {type === "checkbox" && (
        <Styled.CheckboxContainer>
          <Checkbox checked={selected} />
        </Styled.CheckboxContainer>
      )}
      {children}
    </Styled.Container>
  );
}
