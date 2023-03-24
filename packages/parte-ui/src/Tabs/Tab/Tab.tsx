import { forwardRef } from "react";
import * as Styled from "./Tab.styled";
import { TabProps } from "./Tab.types";

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  (props: TabProps, ref) => {
    const {
      leadingIcon,
      trailingIcon,
      children,
      variant = "Primary",
      direction = "horizontal",
    } = props;

    return (
      <Styled.Tab
        ref={ref}
        type="button"
        {...props}
        variant={variant}
        direction={direction}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </Styled.Tab>
    );
  }
);
