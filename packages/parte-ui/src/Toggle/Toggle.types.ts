export type ToggleProps = {
  label?: string;
  disabled?: boolean;
  on: boolean;
  onChange: (on: boolean) => void;
};
