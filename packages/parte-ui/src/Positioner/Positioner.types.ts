export const POSITION = {
  TOP: "TOP",
  TOP_LEFT: "TOP_LEFT",
  TOP_RIGHT: "TOP_RIGHT",
  BOTTOM: "BOTTOM",
  BOTTOM_LEFT: "BOTTOM_LEFT",
  BOTTOM_RIGHT: "BOTTOM_RIGHT",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;

export type Position = keyof typeof POSITION;

export type Dimension = {
  left: number;
  top: number;
  height: number;
  width: number;
  transformOrigin: null | string;
};

export type PositionerProps = {
  children: React.ReactNode;
  position: Position;
  hideDelay: number;
  showDelay: number;
  targetEl: HTMLElement | null;
};
