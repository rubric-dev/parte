import { MenuProps } from "./Menu.types";
import { MenuDivider } from "./MenuDivider";
import { MenuGroup } from "./MenuGroup";
import { MenuRow } from "./MenuRow";
import { MenuOptionsGroup } from "./MenuOptionsGroup";
import * as Styled from "./Menu.styled";

export const Menu = ({ children }: MenuProps) => {
  return <Styled.Menu>{children}</Styled.Menu>;
};

Menu.Row = MenuRow;
Menu.Divider = MenuDivider;
Menu.Group = MenuGroup;
Menu.OptionsGroup = MenuOptionsGroup;
