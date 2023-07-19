/* eslint-disable react-hooks/rules-of-hooks */
import { InterfaceConsoleIcon } from "@parte-ds/icons";
import { Badge, Box, ButtonGroup, Toggle } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const ButtonGroupStory: Meta = {
  title: "Components/Buttons/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default ButtonGroupStory;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => {
    const [index, setIndex] = useState(0);
    const [disabled, setDisabeld] = useState(false);
    return (
      <Box>
        <Box marginBottom={8}>
          <Toggle
            label="비활성화 하기"
            onChange={(e) => setDisabeld(e.target.checked)}
          />
        </Box>
        <ButtonGroup>
          <ButtonGroup.Option
            isSelected={index === 0}
            onClick={() => setIndex(0)}
            leadingNode={<InterfaceConsoleIcon size={12} />}
            disabled={disabled}
          >
            Label
          </ButtonGroup.Option>
          <ButtonGroup.Option
            isSelected={index === 1}
            onClick={() => setIndex(1)}
            trailingNode={
              <Badge
                text="6"
                badgeColor={disabled ? "GREY" : "TEAL"}
                type="pills"
              />
            }
            disabled={disabled}
          >
            Label
          </ButtonGroup.Option>
          <ButtonGroup.Option
            isSelected={index === 2}
            onClick={() => setIndex(2)}
            trailingNode={<InterfaceConsoleIcon size={12} />}
            disabled={disabled}
          >
            Label
          </ButtonGroup.Option>
        </ButtonGroup>
      </Box>
    );
  },
};
