import { Meta, StoryObj } from "@storybook/react";
import { Alert, Box } from "@parte-ds/ui";

const AlertStory: Meta = {
  title: "Components/Alerts/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
  argTypes: {
    type: {
      table: {
        summary: "inline | alert | toast ",
        defaultValue: {
          summary: "alert",
        },
      },
      description: "Alert의 형태. `inline`, `alert`, `toast` 중 하나",
    },
    status: {
      table: {
        summary: "success | info | warning | error",
      },
      description:
        "Alert의 상태. `success`, `info`, `warning`, `error` 중 하나",
    },
    message: {
      description: "`type`이 inline일 경우에 필요.",
    },
    title: {
      description: "`type`이 alert, toast일 경우에 제목으로 그릴 텍스트",
    },
    chidlren: {
      description: "`type`이 alert, toast일 경우에 내용으로 그릴 `ReactNode`",
    },
  },
};

export default AlertStory;

type Story = StoryObj<typeof Alert>;

export const AlertTypes: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={16}>
        <Alert type="inline" status="success" message="Inline Alert" />
        <Alert type="alert" status="success" title="Alert">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Alert>
        <Alert type="toast" status="success" title="Toast">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Alert>
      </Box>
    );
  },
};
export const Success: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={16}>
        <Alert type="inline" status="success" message="Inline success" />
        <Alert type="alert" status="success" title="Success">
          Alert success
        </Alert>
        <Alert type="toast" status="success" title="Success">
          Toast success
        </Alert>
      </Box>
    );
  },
};
export const Info: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={16}>
        <Alert type="inline" status="info" message="Inline info" />
        <Alert type="alert" status="info" title="Info">
          Alert info
        </Alert>
        <Alert type="toast" status="info" title="Info">
          Toast info
        </Alert>
      </Box>
    );
  },
};
export const Warning: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={16}>
        <Alert type="inline" status="warning" message="Inline warning" />
        <Alert type="alert" status="warning" title="Warning">
          Alert warning
        </Alert>
        <Alert type="toast" status="warning" title="Warning">
          Toast warning
        </Alert>
      </Box>
    );
  },
};
export const Error: Story = {
  render: () => {
    return (
      <Box display="flex" flexDirection="column" gap={16}>
        <Alert type="inline" status="error" message="Inline alert" />
        <Alert type="alert" status="error" title="Error">
          Alert error
        </Alert>
        <Alert type="toast" status="error" title="Error">
          Toast error
        </Alert>
      </Box>
    );
  },
};

export const NoDescription: Story = {
  args: {
    type: "alert",
    status: "info",
    title: "Only Title",
  },
};
