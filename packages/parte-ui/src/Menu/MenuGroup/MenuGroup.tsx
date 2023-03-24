import { MenuRow } from "../MenuRow";
import * as Styled from "./MenuGroup.styled";
import { MenuGroupProps } from "./MenuGroup.types";

export function MenuGroup({ title, children }: MenuGroupProps) {
  return (
    <Styled.Group display="flex" flexDirection="column">
      {title && <MenuRow type="title">{title}</MenuRow>}
      {children}
    </Styled.Group>
  );
}
