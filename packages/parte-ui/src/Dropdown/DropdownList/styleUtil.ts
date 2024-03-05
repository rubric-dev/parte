import { CSSProperties } from "react";
import { DropdownPosition } from "../Dropdown.types";

export const getDropdownPosition = (
  menuRect: DOMRect,
  parentRect: DOMRect,
  innerWidth: number,
  innerHeight: number,
  offset = 8
): DropdownPosition => {
  const { bottom: parentBottom, left: parentLeft } = parentRect;
  const { width: menuWidth, height: menuHeight } = menuRect;

  const vertical =
    parentBottom + menuHeight + offset > innerHeight ? "TOP" : "BOTTOM";
  const horizontal = parentLeft + menuWidth > innerWidth ? "RIGHT" : "LEFT";

  return `${vertical}_${horizontal}`;
};

export const getDropdownStyle = (
  position: DropdownPosition,
  parentRect: DOMRect,
  menuRect: DOMRect,
  innerHeight: number,
  option?: {
    offset?: number;
    usePortal?: boolean;
  }
): CSSProperties => {
  const offset = option?.offset ?? 8;
  const usePortal = option?.usePortal;

  const style: CSSProperties = {};
  const [vertical, horizontal] = position.split("_");

  const {
    width: parentWidth,
    height: parentHeight,
    bottom: parnetBottom,
    left: parentLeft,
  } = parentRect;
  const { width } = menuRect;

  switch (vertical) {
    case "TOP":
      style.bottom = usePortal
        ? innerHeight - (parnetBottom - parentHeight - offset)
        : `${parentHeight + offset}px`;
      break;
    case "BOTTOM":
      style.top = usePortal ? parnetBottom + offset : parentHeight + offset;
      break;
    default:
      break;
  }
  switch (horizontal) {
    case "LEFT":
      style.left = usePortal ? parentLeft - (width + parentWidth) / 4 : 0;
      break;
    case "RIGHT":
      if (usePortal) {
        style.left = parentLeft - width + parentWidth;
      } else {
        style.right = 0;
      }
      break;
    default:
      break;
  }
  return style;
};
