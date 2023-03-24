import { Heading, Paragraph, Caption, Code, Box } from "@parte/ui";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Foundation/Typography",
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Box display="flex" flexDirection="column" gap={10}>
        <Heading size={900}>Heading 900</Heading>
        <Heading size={800}>Heading 800</Heading>
        <Heading size={700}>Heading 700</Heading>
        <Heading size={600}>Heading 600</Heading>
        <Heading size={500}>Heading 500</Heading>
        <Heading size={400}>Heading 400</Heading>
        <Heading size={300}>Heading 300</Heading>
        <Heading size={200}>Heading 200</Heading>
        <Heading size={100}>Heading 100</Heading>
      </Box>
      <Box display="flex" flexDirection="column" gap={10}>
        <Paragraph size={300}>Paragraph 300</Paragraph>
        <Paragraph size={200}>Paragraph 200</Paragraph>
        <Paragraph size={100}>Paragraph 100</Paragraph>
      </Box>
      <Box display="flex" flexDirection="column" gap={10}>
        <Caption size={200}>Caption 200</Caption>
        <Caption size={100}>Caption 100</Caption>
      </Box>
      <Box display="flex" flexDirection="column" gap={10}>
        <Code>Code Default</Code>
        <Code variant="minimal">Code Minimal</Code>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});

const CustomStyle: Story = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Box display="flex" flexDirection="column" gap={10}>
        <Heading size={900} marginBottom={20}>
          Heading 900
        </Heading>
        <Heading size={800}>Heading 800</Heading>
        <Heading size={700} overrideStyles={{ backgroundColor: "red" }}>
          Heading 700
        </Heading>
        <Heading size={600}>Heading 600</Heading>
        <Heading size={500}>Heading 500</Heading>
        <Heading size={400}>Heading 400</Heading>
        <Heading size={300}>Heading 300</Heading>
        <Heading size={200}>Heading 200</Heading>
        <Heading size={100}>Heading 100</Heading>
      </Box>
      <Box display="flex" flexDirection="column" gap={10}>
        <Paragraph size={300}>Paragraph 300</Paragraph>
        <Paragraph size={200} color="Y600">
          Paragraph 200
        </Paragraph>
        <Paragraph size={100}>Paragraph 100</Paragraph>
      </Box>
      <Box display="flex" flexDirection="column" gap={10}>
        <Caption size={200}>Caption 200</Caption>
        <Caption size={100} marginTop={50} color="ChartBlue">
          Caption 100
        </Caption>
      </Box>
      <Box display="flex" flexDirection="column" gap={10}>
        <Code>Code Default</Code>
        <Code variant="minimal">Code Minimal</Code>
      </Box>
    </Box>
  );
};

export const Custom = CustomStyle.bind({});
