import React from "react";
import { Position } from "../Positioner";

export type TooltipProps = {
  position?: Position;
  content: React.ReactNode;
  children: React.ReactNode;
  hideDelay?: number;
  showDelay?: number;
  isShown?: boolean;
};
