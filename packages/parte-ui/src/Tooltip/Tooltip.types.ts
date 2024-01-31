import React, { PropsWithChildren } from "react";
import { Position } from "../Positioner";
import { BoxProps } from "../Layout";

export type TooltipProps = PropsWithChildren<{
  position?: Position;
  content: React.ReactNode;
  hideDelay?: number;
  showDelay?: number;
  isShown?: boolean;
}> &
  Pick<BoxProps, "width" | "maxWidth" | "minWidth">;
