import { forwardRef } from "react";
import * as Styled from "./Tab.styled";
import { TabProps } from "./Tab.types";

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  (props: TabProps, ref) => {
    const {
      leadingIcon,
      trailingIcon,
      children,
      variant = "Primary",
      direction = "horizontal",
      tabIndex = 0,
      onClick,
      onFocus,
      disabled,
    } = props;

    return (
      <Styled.Tab
        ref={ref}
        tabIndex={disabled ? -1 : tabIndex}
        {...props}
        variant={variant}
        direction={direction}
        disabled={disabled}
        onClick={(e) => {
          if (disabled) return;
          onClick?.(e);
        }}
        onFocus={(e) => {
          if (disabled) return;
          onFocus?.(e);
        }}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </Styled.Tab>
    );
  }
);
Tab.displayName = "Tab";
