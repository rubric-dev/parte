import { ActionSearchIcon, InterfaceCaretDownIcon } from "@parte-ds/icons";
import { Box, TextInput, Field } from "@parte-ds/ui";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Input = () => {
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Field width={260}>
        <Field.Label htmlFor="Label1" required>
          Label
        </Field.Label>
        <Field.Description>Description</Field.Description>
        <TextInput placeholder="with label" id="Label1" isError />
        <Field.ErrorMessage>Error Message</Field.ErrorMessage>
      </Field>
      <Field direction="horizontal">
        <Field.Label required>Label Label Label Label</Field.Label>
        <TextInput placeholder="with label" width={260} />
        <Field.ErrorMessage>Error Message</Field.ErrorMessage>
      </Field>
      <Field.Label disabled>불가능 라벨</Field.Label>

      <TextInput
        placeholder="controlled"
        width={260}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextInput placeholder="with label description" width={260} />
      <TextInput width={260} placeholder="placeholder" />
      <TextInput width={260} placeholder="disabled" disabled />
      <TextInput
        width={260}
        placeholder="readOnly"
        readOnly
        value="Read only input"
      />
      <TextInput width={260} placeholder="error" isError />
      <TextInput
        width={260}
        placeholder="width icon"
        leadingIcon={<ActionSearchIcon size={12} color="N600" />}
        trailingIcon={<InterfaceCaretDownIcon size={12} color="N600" />}
      />
      <TextInput
        width={260}
        placeholder="width icon and disabled"
        leadingIcon={<ActionSearchIcon size={12} color="N600" />}
        trailingIcon={<InterfaceCaretDownIcon size={12} color="N600" />}
        disabled
      />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<TextInput width={260} />}
      />
    </Box>
  );
};
export default Input;
