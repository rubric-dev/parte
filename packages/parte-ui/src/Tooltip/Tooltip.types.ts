import React, { HTMLAttributes } from 'react';
import { Position } from '../Positioner';

export type TooltipProps = HTMLAttributes<HTMLDivElement> & {
  position?: Position;
  content: React.ReactNode | string;
  children: React.ReactNode;
  hideDelay?: number;
  showDelay?: number;
  isShown?: boolean;
};
