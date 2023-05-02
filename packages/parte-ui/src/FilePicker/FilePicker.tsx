import { FilePickerProps } from "./FilePicker.types";
import * as Styled from "./FilePicker.styled";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { Box } from "../Layout";
import { Caption, Paragraph } from "../@foundations/Typography";
import { TextInput } from "../TextInput";

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
  label,
  description,
  required = false,
  placeholder = "Select the file here!",
  name,
  disabled = false,
  multiple,
  accept,
  errorMessage,
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
    <Box display="flex" flexDirection="column">
      {(label || description) && (
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          style={{ marginBottom: "2px" }}
        >
          {label && (
            <Styled.LabelWrapper>
              {required && (
                <Caption size={200} color="R400">
                  *
                </Caption>
              )}
              <Styled.Label
                htmlFor={name}
                title={required ? "This field is required" : ""}
              >
                {label}
              </Styled.Label>
            </Styled.LabelWrapper>
          )}
          {description && (
            <Paragraph size={100} color="N700">
              {description}
            </Paragraph>
          )}
        </Box>
      )}
      <Styled.Container>
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
          required={required}
          multiple={multiple}
          disabled={disabled}
          onChange={handleFileChange}
          onBlur={handleBlur}
        />
        <Styled.FilePickerInput focused={inputFocused}>
          <TextInput
            disabled={disabled}
            ref={inputRef}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            fullWidth
            errorText={errorMessage}
            placeholder={placeholder}
            value={inputText(files)}
          />
        </Styled.FilePickerInput>
        <Styled.FilePickerButton
          variant="outline-secondary"
          disabled={disabled}
          error={!!errorMessage}
          onClick={handleButtonClick}
        >
          {buttonText(files)}
        </Styled.FilePickerButton>
      </Styled.Container>
    </Box>
  );
};
