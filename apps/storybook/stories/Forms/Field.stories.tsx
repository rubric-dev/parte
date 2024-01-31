import {
  Box,
  Field,
  FilePicker,
  Radio,
  Select,
  TagInput,
  TextInput,
  Textarea,
  Toggle,
} from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { ReactNode, cloneElement, useState } from "react";

const FieldStory: Meta = {
  title: "Components/Forms/Field",
  component: Field,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};
export default FieldStory;

type Story = StoryObj<typeof Field>;

const FormComponentTypes = [
  "TextInput",
  "Textarea",
  "TagInput",
  "FilePicker",
  "Select",
] as const;

const Directions = ["vertical", "horizontal"] as const;

const FieldExample = () => {
  const [formType, setFormType] = useState<
    "TextInput" | "Textarea" | "TagInput" | "FilePicker" | "Select"
  >("TextInput");
  const [description, setDescription] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "vertical"
  );

  let childrenComponent: ReactNode;
  switch (formType) {
    case "TextInput":
      childrenComponent = <TextInput placeholder="Placeholder" />;
      break;
    case "Textarea":
      childrenComponent = <Textarea placeholder="Placeholder" />;
      break;
    case "TagInput":
      childrenComponent = (
        <TagInput
          onAdd={() => {}}
          onRemove={() => {}}
          values={[]}
          placeholder="Placeholder"
        />
      );
      break;
    case "FilePicker":
      childrenComponent = <FilePicker name="file" placeholder="Placeholder" />;
      break;
    case "Select":
      childrenComponent = <Select placeholder="Placeholder" />;
      break;
  }

  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Field>
        <Field.Label>Form 타입</Field.Label>
        <Box display="inline-flex" gap={16}>
          {FormComponentTypes.map((type) => (
            <Radio
              key={type}
              name="formType"
              defaultChecked={formType === type}
              value={type}
              onChange={() => setFormType(type)}
              label={type}
            />
          ))}
        </Box>
      </Field>
      <Field>
        <Field.Label tooltip="예시 툴팁입니다.">
          툴팁이 보여지는 타이틀
        </Field.Label>
        <Toggle
          defaultChecked={description}
          onChange={() => setDescription(!description)}
        />
      </Field>
      <Field>
        <Field.Label>Description</Field.Label>
        <Toggle
          defaultChecked={description}
          onChange={() => setDescription(!description)}
        />
      </Field>
      <Field>
        <Field.Label>Direction</Field.Label>
        <Box display="inline-flex" gap={16}>
          {Directions.map((value) => (
            <Radio
              key={value}
              name="direction"
              defaultChecked={direction === value}
              value={value}
              onChange={() => setDirection(value)}
              label={value}
            />
          ))}
        </Box>
      </Field>
      <Field>
        <Field.Label>Error</Field.Label>
        <Toggle
          onChange={(e) =>
            setErrorMessage(e.target.checked ? "Error Message" : "")
          }
        />
      </Field>
      <Field>
        <Field.Label>Disabled</Field.Label>
        <Toggle onChange={() => setDisabled(!disabled)} />
      </Field>
      <Field>
        <Field.Label>Required</Field.Label>
        <Toggle onChange={() => setRequired(!required)} />
      </Field>

      {direction === "vertical" ? (
        <Field direction={direction}>
          <Field.Label disabled={disabled} required={required}>
            Label
          </Field.Label>
          {description && <Field.Description>Description</Field.Description>}
          {cloneElement(childrenComponent, {
            isError: !!errorMessage,
            disabled,
          })}
          {errorMessage && (
            <Field.ErrorMessage>{errorMessage}</Field.ErrorMessage>
          )}
        </Field>
      ) : (
        <Field direction={direction}>
          <Field.Label disabled={disabled} required={required}>
            Label
          </Field.Label>

          {cloneElement(childrenComponent, {
            isError: !!errorMessage,
            disabled,
          })}
          {errorMessage ? (
            <Field.ErrorMessage>{errorMessage}</Field.ErrorMessage>
          ) : (
            description && <Field.Description>Description</Field.Description>
          )}
        </Field>
      )}
    </Box>
  );
};

export const Default: Story = {
  render: FieldExample,
  args: {},
};
