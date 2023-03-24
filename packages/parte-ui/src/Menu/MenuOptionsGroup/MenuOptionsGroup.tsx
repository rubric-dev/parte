import { ActionTickIcon } from "../../../../parte-icons/src";
import { MenuRow } from "../MenuRow";
import * as Styled from "./MenuOptionsGroup.styled";
import { MenuOptionsGroupProps } from "./MenuOptionsGroup.types";

export function MenuOptionsGroup<T>({
  title,
  options,
  selected,
  onChange,
}: MenuOptionsGroupProps<T>) {
  return (
    <Styled.Group display="flex" flexDirection="column">
      {title && <MenuRow type="title">{title}</MenuRow>}
      {options.map(({ label, value }) => {
        const isSelected = value === selected;
        return (
          <MenuRow
            key={label}
            leadingIcon={
              isSelected ? <ActionTickIcon size={16} /> : <Styled.EmptyIcon />
            }
            type="element"
            selected={isSelected}
            onSelect={() => onChange(value)}
          >
            {label}
          </MenuRow>
        );
      })}
    </Styled.Group>
  );
}
