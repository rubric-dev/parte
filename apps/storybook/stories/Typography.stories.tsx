import { Headline, Paragraph, Caption, Code, Box } from "@parte-ds/ui";
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
        <Headline size={900}>Headline 900</Headline>
        <Headline size={800}>Headline 800</Headline>
        <Headline size={700}>Headline 700</Headline>
        <Headline size={600}>Headline 600</Headline>
        <Headline size={500}>Headline 500</Headline>
        <Headline size={400}>Headline 400</Headline>
        <Headline size={300}>Headline 300</Headline>
        <Headline size={200}>Headline 200</Headline>
        <Headline size={100}>Headline 100</Headline>
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
        <Code variant="ghost-secondary">Code Minimal</Code>
      </Box>
    </Box>
  );
};

export const Default = Template.bind({});

const CustomStyle: Story = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Box display="flex" flexDirection="column" gap={10}>
        <Headline size={900} marginBottom={20}>
          Headline 900
        </Headline>
        <Headline size={800}>Headline 800</Headline>
        <Headline size={700} overrideStyles={{ backgroundColor: "red" }}>
          Headline 700
        </Headline>
        <Headline size={600}>Headline 600</Headline>
        <Headline size={500}>Headline 500</Headline>
        <Headline size={400}>Headline 400</Headline>
        <Headline size={300}>Headline 300</Headline>
        <Headline size={200}>Headline 200</Headline>
        <Headline size={100}>Headline 100</Headline>
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
        <Code variant="ghost-secondary">Code Minimal</Code>
      </Box>
    </Box>
  );
};

export const Custom = CustomStyle.bind({});
