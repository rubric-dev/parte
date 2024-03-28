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
                      type="checkbox"
                      key={index}
                      onSelect={() => {
                        onSelect(option);
                      }}
                      selected={option === selectValue}
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

        {/* <DropdownList options={OPTIONS} /> */}
      </Box>
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
            <DropdownList
              width={120}
              isMulti
              title="타이틀"
              options={OPTIONS}
              onSelect={(option: Option<string>) => {
                const isExist = selectValues.find(
                  (value) => value.value === option.value
                );
                if (isExist) {
                  const newValues = selectValues.filter(
                    (value) => value.value !== option.value
                  );
                  setSelectValues(newValues);
                  return;
                }
                setSelectValues([...selectValues, option]);
              }}
              value={selectValues}
            />
          </Dropdown.Menu>
        </Dropdown>

        {/* <DropdownList options={OPTIONS} /> */}
      </Box>
    </Box>
  );
};
export default DropdownTest;
