import { ActionChatIcon } from "@parte-ds/icons";
import {
  Box,
  Button,
  Dropdown,
  DropdownList,
  Option,
  SelectRow,
} from "@parte-ds/ui";
import { useState } from "react";

const OPTIONS: Option<string>[] = [
  {
    label: "label1",
    value: "value1",
  },
  {
    label: "label2",
    value: "value2",
    icon: <ActionChatIcon size={12} />,
  },
  {
    label: "label3",
    value: "value3",
    icon: <ActionChatIcon size={12} />,
  },
];

const DropdownTest = () => {
  const [selectValue, setSelectValue] = useState<Option<string>>({
    label: "label3",
    value: "value3",
  });
  const onSelect = (value: Option<string>) => {
    console.log(`value:`, value);
    setSelectValue(value);
  };
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Dropdown usePortal>
        <Dropdown.Trigger>
          <Button>드롭다운</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          {({ onClose }) => (
            <DropdownList
              closeOnSelect={false}
              options={OPTIONS}
              value={selectValue}
              onSelect={onSelect}
            />
          )}
        </Dropdown.Menu>
      </Dropdown>
      <Box display="flex" flexDirection="column">
        <SelectRow selected>안녕안녕</SelectRow>
        <SelectRow>안녕안녕</SelectRow>
        <SelectRow disabled>안녕안녕</SelectRow>
        <SelectRow variant="search" />
      </Box>
    </Box>
  );
};
export default DropdownTest;
