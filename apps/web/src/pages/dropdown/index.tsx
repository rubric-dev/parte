import { ActionChatIcon, LogoutIcon } from "@parte-ds/icons";
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
      <Dropdown>
        <Dropdown.Trigger onClick={(e) => e.stopPropagation()}>
          <Box display="flex">
            <Button variant="text-secondary" style={{ padding: "8px" }}>
              <Headline size={400}>회사</Headline>
            </Button>
          </Box>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          {({ onClose }) => (
            <Fragment>
              <Menu>
                {OPTIONS.map((option, index) => (
                  <Menu.Row
                    key={index}
                    onSelect={() => {
                      onClose?.();
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={12}>
                      <LogoutIcon color="N700" />
                      <Paragraph size={200} color="N800">
                        {option.label}
                      </Paragraph>
                    </Box>
                  </Menu.Row>
                ))}
              </Menu>
            </Fragment>
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
