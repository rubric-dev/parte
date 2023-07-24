import {
  Box,
  FilePicker,
  Select,
  TagInput,
  TextInput,
  Textarea,
  Field,
} from "@parte-ds/ui";

const InputWrapperTest = () => {
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Field>
        <Field.Label required>Label</Field.Label>
        <Field.Description>This is Description</Field.Description>
        <TextInput width={260} id="text-input" />
      </Field>
      <Field direction="horizontal">
        <Field.Label required htmlFor="text-input-horizontal">
          Label
        </Field.Label>
        <TextInput width={260} id="text-input-horizontal" />
        <Field.Description>This is Description</Field.Description>
      </Field>

      <Field>
        <Field.Label htmlFor="textarea">Label</Field.Label>
        <Field.Description>This is Description</Field.Description>
        <Textarea id="textarea" width={260} />
      </Field>

      <Field>
        <Field.Label htmlFor="select">Label</Field.Label>
        <Field.Description>This is Description</Field.Description>
        <Select
          width={260}
          options={[{ label: "Option 1", value: "1" }]}
          inputId="select"
          openMenuOnFocus
        />
      </Field>

      <TagInput
        id="taginput"
        width={260}
        values={[{ label: "Option 1", value: "1", status: "normal" }]}
        onAdd={() => {}}
        onRemove={() => {}}
        isError
      />

      <Field>
        <Field.Label htmlFor="taginput">Label</Field.Label>
        <Field.Description>This is Description</Field.Description>
        <TagInput
          id="taginput"
          width={260}
          values={[{ label: "Option 1", value: "1", status: "normal" }]}
          onAdd={() => {}}
          onRemove={() => {}}
        />
      </Field>
      <Field>
        <Field.Label htmlFor="filepicker">Label</Field.Label>
        <Field.Description>This is Description</Field.Description>
        <FilePicker id="filepicker" width={260} name="ㅎㅇㅎㅇ" />
      </Field>
    </Box>
  );
};
export default InputWrapperTest;
