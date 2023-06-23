import { ActionSearchIcon, InterfaceCaretDownIcon } from "@parte-ds/icons";
import { Box, TextInput } from "@parte-ds/ui";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Input = () => {
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <TextInput label="인풋" placeholder="with label" width={260} />
      <TextInput
        label="인풋"
        placeholder="controlled"
        width={260}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <TextInput
        label="인풋"
        description="설명"
        placeholder="with label description"
        width={260}
      />
      <TextInput width={260} placeholder="placeholder" />
      <TextInput width={260} placeholder="disabled" disabled />
      <TextInput
        width={260}
        placeholder="readOnly"
        readOnly
        value="Read only input"
      />
      <TextInput width={260} placeholder="error" errorText="error" />
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
