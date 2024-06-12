import { ActionChatIcon, BoxIcon, LogoutIcon } from "@parte-ds/icons";
import {
  Box,
  Button,
  Dropdown,
  DropdownList,
  Headline,
  Menu,
  Option,
  Paragraph,
  SelectRow,
  TextInput,
} from "@parte-ds/ui";
import { Fragment, useState } from "react";

const OPTIONS: Option<string>[] = [
  {
    label: "label1",
    value: "value1",
  },
  {
    label: "label2",
    value: "value2",
  },
  {
    label: "label3",
    value: "value3",
  },
  {
    label: "label3",
    value: "value3",
  },
  {
    label: "label3",
    value: "value3",
  },
  {
    label: "label3",
    value: "value3",
  },
];

const DropdownTest = () => {
  const [selectValue, setSelectValue] = useState<Option<string>>({
    label: "label3",
    value: "value3",
  });

  const onSelect = (value: Option<string>) => {
    setSelectValue(value);
  };
  const [selectValues, setSelectValues] = useState<Option<string>[]>([
    {
      label: "label2",
      value: "value2",
    },
    {
      label: "label3",
      value: "value3",
    },
  ]);

  return (
    <Box display="flex" gap={80}>
      <Box display="flex" flexDirection="column" gap={16}>
        <Dropdown>
          <Dropdown.Trigger>
            <TextInput
              readOnly
              value={selectValues.map(({ label }) => label)}
            />
          </Dropdown.Trigger>
          <Dropdown.Menu>
            <DropdownList options={OPTIONS} />
          </Dropdown.Menu>
        </Dropdown>
      </Box>
    </Box>
  );
};
export default DropdownTest;
