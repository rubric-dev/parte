import {
  Box,
  Button,
  DialogModal,
  DialogModalProps,
  theme,
} from "@parte-ds/ui";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import { css } from "styled-components";

export default {
  title: "Components/Overlays/DialogModal",
  component: DialogModal,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const ScrollBox = () => (
  <Box
    width="100%"
    height={1800}
    overrideStyles={css`
      background-color: ${theme.colors.N600};
    `}
  />
);

const Template: Story<DialogModalProps> = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}
    >
      <Button variant="fill-primary" onClick={() => setOpen(true)}>
        Open DialogModal
      </Button>
      <div style={{ width: "100%", height: "1000px" }} />
      <DialogModal
        onCloseComplete={() => setOpen(false)}
        title="Dialog Title"
        {...args}
        isShown={open}
      >
        {children}
      </DialogModal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  confirmVariant: "fill-primary",
  children: `Used for multiline pieces of content. Lorem ipsum dolor sit amet, ex
  lucilius hendrerit vim, tempor scaevola iudicabit ei ius, te eum illud
  impetus antiopam. Eu wisi commune volutpat pro, usu at alii magna
  aperiam.`,
};
export const Error = Template.bind({});
Error.args = {
  confirmVariant: "fill-error",
  confirmLabel: "오류",
  width: 320,
  minHeightContent: 40,
  title: "에러 케이스",
  children: `오류가 발생했습니다`,
};
export const ScrollContent = Template.bind({});
ScrollContent.args = {
  confirmVariant: "fill-primary",
  children: <ScrollBox />,
};
