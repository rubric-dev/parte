import { ActionChatIcon, CaretDownIcon } from "@parte-ds/icons";
import {
  Box,
  Button,
  Dropdown,
  DropdownList,
  GroupOption,
  Option,
  TextInput,
  Toggle,
} from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const OPTIONS: Option<string>[] = [
  {
    label: "label1",
    value: "value1",
    icon: <ActionChatIcon size={20} />,
  },
  {
    label: "label2",
    value: "value2",
    disabled: true,
    icon: <ActionChatIcon size={20} />,
  },
  {
    label: "label3",
    value: "value3",
    icon: <ActionChatIcon size={20} />,
  },
];
const GROUP_OPTIONS: GroupOption<string>[] = [
  {
    groupName: "선민호",
    options: [
      {
        label: "label1-1",
        value: "value1-1",
      },
      {
        label: "label1-2",
        value: "value1-2",
        disabled: true,
        icon: <ActionChatIcon size={20} />,
      },
      {
        label: "label1-3",
        value: "value1-3",
        icon: <ActionChatIcon size={20} />,
      },
    ],
  },
  {
    groupName: "서솔민",
    options: [
      {
        label: "label2-1",
        value: "value2-1",
        icon: <ActionChatIcon size={20} />,
      },
      {
        label: "label2-2",
        value: "value2-2",
        disabled: true,
        icon: <ActionChatIcon size={20} />,
      },
      {
        label: "label2-3",
        value: "value2-3",
        icon: <ActionChatIcon size={20} />,
      },
    ],
  },
  {
    groupName: "김대균",
    options: [
      {
        label: "label3-1",
        value: "value3-1",
      },
      {
        label: "label3-2",
        value: "value3-2",
        disabled: true,
        icon: <ActionChatIcon size={20} />,
      },
      {
        label: "label3-3",
        value: "value3-3",
        icon: <ActionChatIcon size={20} />,
      },
    ],
  },
];

const DropdownStory: Meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default DropdownStory;
type Story = StoryObj<typeof Dropdown>;

const Template = ({ ...args }) => {
  const [selectValue, setSelectValue] = useState<Option<string>>({
    label: "label3",
    value: "value3",
  });

  const onSelect = (option: Option<string>) => {
    setSelectValue(option);
    alert(option.label);
  };
  return (
    <Box
      width="300px"
      minHeight={300}
      display="flex"
      flexDirection="column"
      padding={30}
      style={{
        overflowY: "auto",
        // alignItems: 'flex-end',
      }}
    >
      {/* <div style={{ width: '100%', height: '500px' }}>스크롤용</div> */}
      <Dropdown {...args}>
        <Dropdown.Trigger>
          <Button variant="fill-primary">{selectValue.label}</Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <DropdownList
            options={OPTIONS}
            value={selectValue}
            onSelect={onSelect}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Box>
  );
};

const GroupedTemplate = ({ ...args }) => {
  const [selectValue, setSelectValue] = useState<Option<string>>();

  const onSelect = (value: Option<string>) => {
    setSelectValue(value);
  };

  const [isSearchable, setIsSearchable] = useState(false);
  return (
    <Box
      width="400px"
      minHeight={300}
      display="flex"
      flexDirection="column"
      padding={30}
      gap={8}
      style={{
        overflowY: "auto",
      }}
    >
      <Toggle
        label="검색 input 표시"
        checked={isSearchable}
        onChange={() => setIsSearchable(!isSearchable)}
      />
      <Dropdown {...args}>
        <Dropdown.Trigger>
          <Button variant="fill-primary">
            {selectValue?.label ?? "empty"}
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <DropdownList
            options={GROUP_OPTIONS}
            value={selectValue}
            onSelect={onSelect}
            isSearchable={isSearchable}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Box>
  );
};
const MultiTemplate = ({ ...args }) => {
  const [selectValue, setSelectValue] = useState<Option<string>[]>();
  const [isSearchable, setIsSearchable] = useState(false);
  const [closeOnSelect, setCloseOnSelect] = useState(false);

  return (
    <Box
      width="400px"
      minHeight={300}
      display="flex"
      flexDirection="column"
      padding={30}
      gap={8}
      style={{
        overflowY: "auto",
      }}
    >
      <Toggle
        label="검색 input 표시"
        checked={isSearchable}
        onChange={() => setIsSearchable(!isSearchable)}
      />
      <Toggle
        label="선택시 메뉴 닫힘"
        checked={closeOnSelect}
        onChange={() => setCloseOnSelect(!closeOnSelect)}
      />

      <Dropdown {...args}>
        <Dropdown.Trigger>
          <Button variant="fill-primary">
            {selectValue?.map(({ label }) => label).join(", ") || "empty"}
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <DropdownList
            options={GROUP_OPTIONS}
            value={selectValue}
            isMulti
            onChange={(options) => {
              if ("length" in options) {
                setSelectValue(options);
              }
            }}
            isSearchable={isSearchable}
            closeOnSelect={closeOnSelect}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Box>
  );
};

const SelectTemplate = ({ ...args }) => {
  const [selectValue, setSelectValue] = useState<Option<string>>({
    label: "label3",
    value: "value3",
  });

  const onSelect = (option: Option<string>) => {
    setSelectValue(option);
    alert(option.label);
  };
  return (
    <Box
      width="300px"
      minHeight={300}
      display="flex"
      flexDirection="column"
      padding={30}
      style={{
        overflowY: "auto",
      }}
    >
      <Dropdown {...args}>
        <Dropdown.Trigger>
          <TextInput
            width={240}
            readOnly
            value={selectValue.label}
            trailingIcon={<CaretDownIcon size={12} color="N600" />}
            textInputSize="large"
            style={{ cursor: "pointer" }}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu>
          <DropdownList
            options={OPTIONS}
            value={selectValue}
            onSelect={onSelect}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Box>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    usePortal: false,
  },
};

export const Grouped: Story = {
  render: GroupedTemplate,
};

export const MultiSelect: Story = {
  render: MultiTemplate,
};
export const Select: Story = {
  render: SelectTemplate,
};
