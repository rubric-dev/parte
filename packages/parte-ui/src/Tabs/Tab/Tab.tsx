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
      disabled,
      selected,
      size = "medium",
      gap = 24,
      onClick,
      ...divProps
    } = props;
    return (
      <Styled.Tab
        ref={ref}
        tabIndex={disabled ? -1 : tabIndex}
        $variant={variant}
        $direction={direction}
        $size={size}
        $gap={gap}
        data-selected={selected}
        data-disabled={disabled}
        onClick={(e) => {
          if (disabled) return;
          onClick?.(e);
        }}
        {...divProps}
      >
        <Styled.TabContent
          $variant={variant}
          $size={size}
          data-selected={selected}
          data-disabled={disabled}
        >
          {leadingIcon}
          {children}
          {trailingIcon}
        </Styled.TabContent>
        <Styled.TabLine
          width="100%"
          height={2}
          $variant={variant}
          data-selected={selected}
          data-disabled={disabled}
          borderRadius={30}
        />
      </Styled.Tab>
    );
  }
);
Tab.displayName = "Tab";
