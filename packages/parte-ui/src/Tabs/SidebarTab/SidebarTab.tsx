import { forwardRef } from "react";
import { Tab } from "../Tab/Tab";
import { SidebarTabProps } from "./SidebarTab.types";

export const SidebarTab = forwardRef<HTMLButtonElement, SidebarTabProps>(
  (props: SidebarTabProps, ref) => {
    return (
      <Tab ref={ref} {...props} variant="Secondary" direction="vertical" />
    );
  }
);
