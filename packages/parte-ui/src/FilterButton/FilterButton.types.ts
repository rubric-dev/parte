export type FilterButtonType = "fill" | "outline";
export type FilterButtonSize = "medium" | "large";
export type FilterButtonProps = {
  selectedCount?: number;
  size?: FilterButtonSize;
  type?: FilterButtonType;
  text?: string;
};
