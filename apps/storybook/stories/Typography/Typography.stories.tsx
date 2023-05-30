import { Headline, Paragraph, Caption, Code, Box, theme } from "@parte-ds/ui";
import { StoryObj, Meta } from "@storybook/react";
import { styled } from "styled-components";

const TypographyStory: Meta = {
  title: "Foundation/Typography",
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default TypographyStory;
type Story = StoryObj;

export const HeadlineSize: Story = {
  render: () => {
    return (
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
    );
  },
};
export const ParagraphSize: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={10}>
        <Paragraph size={300}>Paragraph 300</Paragraph>
        <Paragraph size={200}>Paragraph 200</Paragraph>
        <Paragraph size={100}>Paragraph 100</Paragraph>
      </Box>
    );
  },
};
export const CaptionSize: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={10}>
        <Caption size={200}>Caption 200</Caption>
        <Caption size={100}>Caption 100</Caption>
      </Box>
    );
  },
};

export const TypographyColor: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={10}>
        <Headline size={700} color="B300">
          Headline B300
        </Headline>
        <Headline size={700} color="G300">
          Headline G300
        </Headline>
        <Headline size={700} color="R300">
          Headline R300
        </Headline>
        <Paragraph size={300} color="Y400">
          Paragraph Y400
        </Paragraph>
        <Paragraph size={300} color="T400">
          Paragraph T400
        </Paragraph>
        <Paragraph size={300} color="O400">
          Paragraph O400
        </Paragraph>
      </Box>
    );
  },
};

export const CodeVariant: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={10}>
        <Code>Code default</Code>
        <Code variant="ghost-secondary">Code ghost-secondary</Code>
      </Box>
    );
  },
};

const CustomParagraph = styled.p`
  ${theme.typography.P200}
  color: ${theme.colors.N0};
  background-color: ${theme.colors.V500};
  border-radius: 4px;
  padding: 0 4px;
`;
export const CustomTypography: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={10}>
        <CustomParagraph>Custom Paragraph</CustomParagraph>
      </Box>
    );
  },
};
