import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@parte-ds/ui";
import {
  ActionAddIcon,
  ActionCrossIcon,
  InterfaceConsoleIcon,
} from "@parte-ds/icons";
import {
  BUTTON_SIZE_OPTIONS,
  BUTTON_VARIANT_OPTIONS,
} from "../../.storybook/constant";

const ButtonStory: Meta = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    variant: {
      options: BUTTON_VARIANT_OPTIONS,
      control: { type: "radio" },
      description: "Button의 형태",
      table: {
        defaultValue: { summary: "fill-primary" },
      },
    },
    size: {
      options: BUTTON_SIZE_OPTIONS,
      control: { type: "radio" },
      description: "Button 사이즈",
      type: "string",
      table: {
        defaultValue: { summary: "medium" },
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
    size: "medium",
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
    controls: { exclude: ["children", "variant", "size"] },
  },
};

export const FillPrimaryColumn: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "default button",
    variant: "fill-primary",
    size: "medium",
  },
};

export const OutlinePrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "secondary colored button",
    variant: "outline-primary",
    size: "medium",
  },
};

export const OutlineSecondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "secondary button",
    variant: "outline-secondary",
    size: "medium",
  },
};
export const FillTertiary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "default button",
    variant: "fill-tertiary",
    size: "medium",
  },
};
export const GhostPrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "minimal colored button",
    variant: "ghost-primary",
    size: "medium",
  },
};

export const GhostSecondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "minimal button",
    variant: "ghost-secondary",
    size: "medium",
  },
};

export const FillError: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "error button",
    variant: "fill-error",
    size: "medium",
  },
};

export const TextPrimary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "text colored button",
    variant: "text-primary",
    size: "medium",
  },
};
export const TextSecondary: Story = {
  args: {
    leadingIcon: <InterfaceConsoleIcon />,
    children: "text button",
    variant: "text-secondary",
    size: "medium",
  },
};
