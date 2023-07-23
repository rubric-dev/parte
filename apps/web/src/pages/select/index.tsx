import { Box, Option, Select } from "@parte-ds/ui";
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
      <Select label="멀티" options={options} isMulti minWidth={180} />
      <Select label="싱글" options={options} ref={ref} openMenuOnFocus />
    </Box>
  );
};
export default SelectPage;
