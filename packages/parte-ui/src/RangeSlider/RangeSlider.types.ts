import { RangerOptions } from "react-ranger";

export type RangeSliderProps = RangerOptions & {
  label?: string;
  disabled?: boolean;
  valueFormatter?: (value: number) => string;
};
export type TickType = "first" | "last" | null;
