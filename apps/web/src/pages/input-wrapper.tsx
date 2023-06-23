import {
  Box,
  FilePicker,
  Select,
  TagInput,
  TextInput,
  Textarea,
} from "@parte-ds/ui";

const InputWrapperTest = () => {
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <TextInput
        width={260}
        label="Label"
        description="This is Description"
        id="text-input"
        required
      />
      <TextInput
        width={260}
        label="Label"
        description="This is Description"
        id="text-input-horizontal"
        required
        direction="horizontal"
      />
      <Textarea
        id="textarea"
        width={260}
        label="Label"
        description="This is Description"
      />
      <Select
        width={260}
        label="Label"
        description="This is Description"
        type="static"
        options={[{ label: "Option 1", value: "1" }]}
        isDisabled
      />
      <TagInput
        id="taginput"
        width={260}
        label="Label"
        description="This is Description"
        values={[{ label: "Option 1", value: "1", status: "normal" }]}
        onAdd={() => {}}
        onRemove={() => {}}
      />
      <FilePicker
        id="filepicker"
        width={260}
        label="Label"
        description="This is Description"
        name="ㅎㅇㅎㅇ"
      />
    </Box>
  );
};
export default InputWrapperTest;
