export type FilterButtonVariant = "fill" | "outline";
export type FilterButtonSize = "medium" | "large";
export type FilterButtonProps = {
  selectedCount?: number;
  size?: FilterButtonSize;
  variant?: FilterButtonVariant;
  text?: string;
};

export type FilterButtonStyledProps = {
  $size: FilterButtonSize;
  $variant: FilterButtonVariant;
};
