import { TextInputProps } from "../TextInput/TextInput.types";
import { TagOption } from "./Tag";

export type TagInputProps = Omit<TextInputProps, "leadingIcon"> & {
  values: TagOption[];
  addOnBlur?: boolean;
  onAdd: (label: string) => void;
  onRemove: (value: string) => void;
  onInputChange?: () => void;
};
