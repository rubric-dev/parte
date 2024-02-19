import { BellIcon } from "@parte-ds/icons";
import {
  Box,
  Option,
  Paragraph,
  Stacked,
  Tab,
  TabVariant,
  Tabs,
} from "@parte-ds/ui";
import { useState } from "react";
const SAMPLE_TABS: Option<string>[] = [
  { label: "Tab 1", value: "Tab 1" },
  { label: "Tab 2", value: "Tab 2" },
  { label: "Tab 3", value: "Tab 3" },
  { label: "Tab 4", value: "Tab 4" },
];

const Template = ({ variant }: { variant?: TabVariant }) => {
  const [selected, setSelected] = useState<Option<string>>(SAMPLE_TABS[0]);
  return (
    <Tabs>
      {SAMPLE_TABS.map((option) => (
        <Tab
          key={option.label}
          onClick={() => setSelected(option)}
          selected={selected.label === option.label}
          variant={variant}
          leadingIcon={<BellIcon />}
          // size="large"
        >
          {/* <Box height={42} display="flex" alignItems="center"> */}
          {/* <Paragraph size={300}>{option.label}</Paragraph> */}

          {option.label}

          {/* </Box> */}
        </Tab>
      ))}
      {SAMPLE_TABS.map((option) => (
        <Stacked
          key={option.label}
          onClick={() => setSelected(option)}
          selected={selected.label === option.label}
          variant={variant}
          leadingIcon={<BellIcon />}
          // size="large"
        >
          {/* <Box height={42} display="flex" alignItems="center"> */}
          {/* <Paragraph size={300}>{option.label}</Paragraph> */}

          {option.label}

          {/* </Box> */}
        </Stacked>
      ))}
    </Tabs>
  );
};

const TabTest = () => {
  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Template variant="Primary" />
      <Template variant="Secondary" />
      <Paragraph size={300}>기본 색상?</Paragraph>
    </Box>
  );
};
export default TabTest;
