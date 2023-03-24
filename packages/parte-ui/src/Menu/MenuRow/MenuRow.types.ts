export type MenuRowType = "title" | "checkbox" | "element";

export type MenuRowProps = {
  type?: MenuRowType;
  children?: React.ReactNode;
  onSelect?: () => void;
  selected?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
};
