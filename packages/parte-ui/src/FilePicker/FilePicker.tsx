import { ChangeEvent, useCallback, useRef, useState } from "react";
import { TextInput } from "../TextInput";
import { FILE_PICKER_INPUT_WRAPPER } from "../constant/DOM";
import * as Styled from "./FilePicker.styled";
import { FilePickerProps } from "./FilePicker.types";
import { Box } from "../Layout";

const defaultButtonText = (files: File[]) => {
  const fileCount = files.length;
  const action = fileCount === 0 ? "Select" : "Replace";
  const fileLabel = fileCount > 1 ? "files" : "file";

  return `${action} ${fileLabel}`;
};

const getInputValue = (files: File[]) => {
  if (files.length === 1) {
    return files[0].name;
  }

  if (files.length > 1) {
    return `${files.length} files`;
  }

  return "";
};

export const FilePicker = ({
  placeholder = "Select the file here!",
  name,
  disabled = false,
  multiple,
  accept,
  isError,
  width,
  inputText = getInputValue,
  buttonText = defaultButtonText,
  onBlur,
  onChange,
}: FilePickerProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [inputFocused, setInputFocused] = useState(false);
  // textInput 컴포넌트를 참조
  const inputRef = useRef<HTMLInputElement>(null);
  // file picker의 역할을하는 input엘리먼트를 참조
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: ChangeEvent) => {
      // Firefox returns the same array instance each time for some reason
      const files = (e.target as HTMLInputElement)?.files;
      const filesCopy = files ? [...files] : [];

      setFiles(filesCopy);
      onChange?.(filesCopy);
    },
    [onChange]
  );

  const handleButtonClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleBlur = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      // Setting e.target.files to an array fails. It must be a FileList
      if (e.target) {
        e.target.files = fileInputRef.current && fileInputRef.current.files;
      }

      onBlur?.(e);
    },
    [onBlur]
  );

  return (
    <Box display="flex" borderRadius={4} width={width}>
      <input
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          padding: 0,
          overflow: "hidden",
          border: 0,
        }}
        ref={fileInputRef}
        type="file"
        name={name}
        id={name}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleFileChange}
        onBlur={handleBlur}
      />
      <Styled.FilePickerInput focused={inputFocused}>
        <TextInput
          id={FILE_PICKER_INPUT_WRAPPER}
          disabled={disabled}
          ref={inputRef}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          isError={isError}
          placeholder={placeholder}
          value={inputText(files)}
          readOnly
        />
      </Styled.FilePickerInput>
      <Styled.FilePickerButton
        variant="outline-secondary"
        disabled={disabled}
        $error={isError}
        onClick={handleButtonClick}
      >
        {buttonText(files)}
      </Styled.FilePickerButton>
    </Box>
  );
};
