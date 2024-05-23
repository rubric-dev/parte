import React, {
  Reducer,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
  CSSProperties,
} from "react";
import { Portal } from "../Portal";
import useOutsideClick from "../hooks/useOutsideClick";
import * as Styled from "./Dropdown.styled";
import {
  DropdownMenuProps,
  DropdownPosition,
  DropdownProps,
  DropdownTriggerProps,
} from "./Dropdown.types";
import DropdownContext from "./DropdownContext";
import {
  getDropdownPosition,
  getDropdownStyle,
} from "./DropdownList/styleUtil";

export const Dropdown = ({ children, style, ...rest }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onClick = useCallback(() => {
    setIsOpen((props) => !props);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <DropdownContext.Provider
      value={{ ...rest, dropdownRef, isOpen, onClick, onClose }}
    >
      <Styled.Container ref={dropdownRef} onKeyDown={onKeyDown} style={style}>
        {children}
      </Styled.Container>
    </DropdownContext.Provider>
  );
};

const Trigger = ({ children, onClick: onClickProp }: DropdownTriggerProps) => {
  const { onClick } = useContext(DropdownContext);
  return (
    <Styled.Trigger
      onClick={(e) => {
        onClick?.();
        onClickProp?.(e);
      }}
    >
      {children}
    </Styled.Trigger>
  );
};

type MenuState = {
  position: DropdownPosition | null;
  menuStyle?: CSSProperties;
};
const initialMenuState: MenuState = { position: null };

type DecideMenuPosition = {
  type: "decide_menu_position";
  menuRect: DOMRect;
  dropdownRect: DOMRect;
  innerWidth: number;
  innerHeight: number;
  offset?: number;
  usePortal?: boolean;
};
type ResetPosition = { type: "reset_position" };
type MenuAction = DecideMenuPosition | ResetPosition;

const menuReducer: Reducer<MenuState, MenuAction> = (state, action) => {
  switch (action.type) {
    case "decide_menu_position":
      const {
        menuRect,
        dropdownRect,
        innerHeight,
        innerWidth,
        offset,
        usePortal,
      } = action;
      const position = getDropdownPosition(
        menuRect,
        dropdownRect,
        innerWidth,
        innerHeight,
        offset
      );
      const menuStyle = getDropdownStyle(
        position,
        dropdownRect,
        menuRect,
        innerHeight,
        {
          usePortal,
          offset,
        }
      );
      return { ...state, position, menuStyle };
    case "reset_position":
      return { position: null };
  }
};

const Menu = ({ children }: DropdownMenuProps) => {
  const { usePortal, isOpen, dropdownRef, offset, onClose } =
    useContext(DropdownContext);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const [{ position, menuStyle }, dispatch] = useReducer(
    menuReducer,
    initialMenuState
  );

  const decideMenuPosition = useCallback(() => {
    if (!menuRef?.current || !dropdownRef?.current) return;
    const menuRect = menuRef.current.getBoundingClientRect();
    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;

    dispatch({
      type: "decide_menu_position",
      menuRect,
      dropdownRect,
      innerWidth,
      innerHeight,
      usePortal,
      offset,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, usePortal]);

  useOutsideClick([menuRef, dropdownRef], onClose);

  useEffect(() => {
    return () => {
      dispatch({ type: "reset_position" });
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("scroll", decideMenuPosition);
    window.addEventListener("resize", decideMenuPosition);
    return () => {
      if (!isOpen) return;
      window.removeEventListener("scroll", decideMenuPosition);
      window.removeEventListener("resize", decideMenuPosition);
    };
  }, [isOpen, decideMenuPosition]);

  const handleSetRef = (ref: HTMLDivElement | null) => {
    menuRef.current = ref;
    if (position === null) decideMenuPosition();
  };

  if (!isOpen) {
    return null;
  }

  if (usePortal) {
    return (
      <Portal>
        <Styled.Menu
          ref={handleSetRef}
          $hidden={!menuStyle}
          style={menuStyle}
          $usePortal
        >
          {typeof children === "function" ? children({ onClose }) : children}
        </Styled.Menu>
      </Portal>
    );
  }

  return (
    <Styled.Menu
      ref={handleSetRef}
      $hidden={!menuStyle}
      display="flex"
      flexDirection="column"
      style={menuStyle}
    >
      {typeof children === "function" ? children({ onClose }) : children}
    </Styled.Menu>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
