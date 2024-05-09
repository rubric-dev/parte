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
            <Menu>
              {OPTIONS.map((option) => {
                const selected = !!selectValues?.find(
                  (cur) => cur.value === option.value
                );
                return (
                  <SelectRow
                    key={option.value}
                    isMulti
                    selected={selected}
                    onClick={() => {
                      if (selected) {
                        setSelectValues((prev) =>
                          prev.filter((cur) => cur.value !== option.value)
                        );
                      } else {
                        setSelectValues((prev) => [...prev, option]);
                      }
                    }}
                  >
                    <Box display="flex" gap={4}>
                      <BoxIcon />
                      {option.label}
                    </Box>
                  </SelectRow>
                );
              })}
            </Menu>
          </Dropdown.Menu>
        </Dropdown>
      </Box>
    </Box>
  );
};
export default DropdownTest;
