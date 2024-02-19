import { forwardRef } from "react";
import * as Styled from "./Stacked.styled";
import { StackedProps } from "./Stacked.types";

export const Stacked = forwardRef<HTMLDivElement, StackedProps>(
  (props: StackedProps, ref) => {
    const {
      leadingIcon,
      trailingIcon,
      children,
      variant = "Primary",
      direction = "horizontal",
      tabIndex = 0,
      disabled,
      selected,
      size = "medium",
      onClick,
      ...divProps
    } = props;
    return (
      <Styled.Stacked
        ref={ref}
        tabIndex={disabled ? -1 : tabIndex}
        $variant={variant}
        $direction={direction}
        $size={size}
        data-selected={selected}
        data-disabled={disabled}
        onClick={(e) => {
          if (disabled) return;
          onClick?.(e);
        }}
        {...divProps}
      >
        <Styled.StackedContent
          $variant={variant}
          $size={size}
          data-selected={selected}
          data-disabled={disabled}
        >
          {leadingIcon}
          {children}
          {trailingIcon}
        </Styled.StackedContent>
      </Styled.Stacked>
    );
  }
);
Stacked.displayName = "Stacked";
