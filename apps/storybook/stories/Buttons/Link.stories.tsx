import { Box, Link, LinkProps, Paragraph } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";

const LinkStory: Meta = {
  title: "Components/Buttons/Link",
  component: Link,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default LinkStory;

type Story = StoryObj<typeof LinkStory>;

export const Default: Story = {
  args: {
    children: "Link",
    href: "https://google.com",
    target: "_blank",
    disabled: false,
  },
};

export const LinkInParagraph: Story = {
  render: ({ children, args }) => (
    <Box>
      <Paragraph size={200}>
        {`Hello! It's a `}
        <Link {...args}>{children}</Link> Component
      </Paragraph>
    </Box>
  ),
  args: {
    children: "Link",
    href: "https://google.com",
    target: "_blank",
  },
};
