import { createContext } from "react";
import { DropdownContextState } from "./Dropdown.types";

const DropdownContext = createContext<DropdownContextState>({
  isOpen: false,
  onClose: () => {},
});

export default DropdownContext;
