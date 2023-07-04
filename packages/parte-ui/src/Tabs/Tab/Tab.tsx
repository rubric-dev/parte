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
      ...divProps
    } = props;

    return (
      <Styled.Tab
        ref={ref}
        tabIndex={disabled ? -1 : tabIndex}
        $variant={variant}
        $direction={direction}
        data-selected={selected}
        data-disabled={disabled}
        {...divProps}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </Styled.Tab>
    );
  }
);
Tab.displayName = "Tab";
