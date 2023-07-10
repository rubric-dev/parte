import { TableThIcon } from "@parte-ds/icons";
import { IconButton } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { BUTTON_VARIANT_OPTIONS } from "../../.storybook/constant";

const IconButtonStory: Meta = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  argTypes: {
    variant: {
      options: BUTTON_VARIANT_OPTIONS,
      control: { type: "radio" },
      description: "Button의 형태",
      table: {
        defaultValue: { summary: "fill-primary" },
      },
    },
    size: {
      description:
        "IconButton의 크기, Icon의 크기와 컬러는 `Icon` ReactNode props에 직접 수정할 수 있습니다. 기본은 size: 16 입니다. ",
    },
    Icon: {
      controls: false,
    },
  },
} as Meta;

export default IconButtonStory;
type Story = StoryObj<typeof IconButton>;

export const FillPrimary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "fill-primary",
    size: 32,
    disabled: false,
  },
};

export const OutlinePrimary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "outline-primary",
  },
};

export const OutlineSecondary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "outline-secondary",
  },
};

export const GhostPrimary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "ghost-primary",
  },
};
export const GhostSecondary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "ghost-secondary",
  },
};

export const FillError: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "fill-error",
  },
};

export const TextPrimary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "text-primary",
  },
};

export const TextSecondary: Story = {
  args: {
    Icon: <TableThIcon />,
    variant: "text-secondary",
  },
};
