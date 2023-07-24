import { Box, Field, Option, Select } from "@parte-ds/ui";
import { useEffect, useRef } from "react";
import { GroupBase, SelectInstance } from "react-select";

const options = [
  { label: "label1", value: "value1" },
  { label: "label2", value: "value2" },
  { label: "label3", value: "value3" },
  { label: "label4", value: "value4" },
];

const SelectPage = () => {
  const ref =
    useRef<SelectInstance<Option<string>, boolean, GroupBase<Option<string>>>>(
      null
    );

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={16} width={300}>
      <Field minWidth={180}>
        <Field.Label>멀티</Field.Label>
        <Select options={options} isMulti />
      </Field>
      <Field>
        <Field.Label>싱글</Field.Label>
        <Select options={options} ref={ref} openMenuOnFocus />
      </Field>
    </Box>
  );
};
export default SelectPage;
