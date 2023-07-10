import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@parte-ds/ui";
import {
  ActionAddIcon,
  ActionCrossIcon,
  InterfaceConsoleIcon,
} from "@parte-ds/icons";
import { BUTTON_VARIANT_OPTIONS } from "../../.storybook/constant";

const ButtonStory: Meta = {
  title: "Components/Buttons/Button",
  component: Button,
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
    direction: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
      description: "Button에서 텍스트와 아이콘들들의 정렬 방식",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
    },

    trailingIcon: {
      description: "Button 뒤쪽에 올 아이콘",
      table: { type: { summary: "ReactNode" } },
    },
    leadingIcon: {
      description: "Button 앞쪽에 올 아이콘",
      table: { type: { summary: "ReactNode" } },
    },
  },
};

export default ButtonStory;

type Story = StoryObj<typeof Button>;

export const FillPrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "default button",
    variant: "fill-primary",
    direction: "horizontal",
  },
  parameters: {
    controls: { exclude: ["children", "trailingIcon", "leadingIcon"] },
  },
};
export const IconArgs: Story = {
  args: {
    leadingIcon: <ActionAddIcon />,
    children: "아이콘들",
    trailingIcon: <ActionCrossIcon />,
  },
  parameters: {
    controls: { exclude: ["children", "variant", "direction"] },
  },
};

export const FillPrimaryColumn: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "default button",
    variant: "fill-primary",
    direction: "vertical",
  },
};

export const OutlinePrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "secondary colored button",
    variant: "outline-primary",
  },
};

export const OutlineSecondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "secondary button",
    variant: "outline-secondary",
  },
};
export const GhostPrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "minimal colored button",
    variant: "ghost-primary",
  },
};

export const GhostSecondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "minimal button",
    variant: "ghost-secondary",
  },
};

export const FillError: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "error button",
    variant: "fill-error",
  },
};

export const TextPrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "text colored button",
    variant: "text-primary",
  },
};
export const TextSecondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "text button",
    variant: "text-secondary",
  },
};
