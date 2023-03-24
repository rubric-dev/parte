import { Option } from "../../Dropdown";

export type TagStatus = "normal" | "disabled" | "error";

export type TagOption = Option<string> & {
  status: TagStatus;
};

export type TagProps = {
  tag: TagOption;
  onRemove: (value: string) => void;
};
