/* eslint-disable react-hooks/rules-of-hooks */
import { ActionSmallTickIcon } from "@parte-ds/icons";
import { Box, ButtonGroup, Toggle } from "@parte-ds/ui";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import styled, { css } from "styled-components";

const ButtonGroupOptionStory: Meta = {
  component: ButtonGroup.Option,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
};

export default ButtonGroupOptionStory;

type Story = StoryObj<typeof ButtonGroup.Option>;

export type StatusType = "Disalbed" | "Enabled" | "Danger" | "Warning" | "Info";
const Dot = styled.div<{ $status: StatusType }>`
  ${({ theme, $status }) => {
    let backgroundColor;
    switch ($status) {
      case "Enabled":
        backgroundColor = theme.colors.G400;
        break;
      case "Danger":
        backgroundColor = theme.colors.R400;
        break;
      case "Disalbed":
        backgroundColor = theme.colors.N500;
        break;
      case "Warning":
        backgroundColor = theme.colors.Y400;
        break;
      case "Info":
        backgroundColor = theme.colors.B400;
        break;
    }

    return css`
      border-radius: 50%;
      background-color: ${backgroundColor};
      aspect-ratio: 1;
      inline-size: 6px;
    `;
  }}
`;

export const Default: Story = {
  render: () => {
    const [seletable, setSelectable] = useState(false);
    const [index, setIndex] = useState(0);
    const [[showleftIcon, showRightIcon], setShowIcons] = useState([
      false,
      false,
    ] as [boolean, boolean]);
    const [disabled, setDisabled] = useState(false);

    return (
      <Box display="flex" flexDirection="column" gap={16} alignItems="center">
        {
          <Box
            display="flex"
            flexDirection="column"
            gap={8}
            alignItems="flex-start"
          >
            <Toggle
              on={seletable}
              onChange={() => setSelectable(!seletable)}
              label="선택 가능하도록 전환"
            />
            <Toggle
              on={showleftIcon}
              onChange={() => setShowIcons((prev) => [!prev[0], prev[1]])}
              label="왼쪽에 아이콘 추가"
            />
            <Toggle
              on={showRightIcon}
              onChange={() => setShowIcons((prev) => [prev[0], !prev[1]])}
              label="오른쪽에 아이콘 추가"
            />
            <Toggle
              on={disabled}
              onChange={() => setDisabled(!disabled)}
              label="비활성화 하기"
            />
          </Box>
        }
        <Box display="flex" gap={16}>
          <ButtonGroup.Option
            place="left"
            isSelected={seletable ? index === 0 : false}
            onClick={() => setIndex(0)}
            leadingNode={showleftIcon && <Dot $status="Enabled" />}
            trailingNode={showRightIcon && <ActionSmallTickIcon />}
            disabled={disabled}
          >
            왼쪽
          </ButtonGroup.Option>
          <ButtonGroup.Option
            place="middle"
            isSelected={seletable ? index === 1 : false}
            onClick={() => setIndex(1)}
            leadingNode={showleftIcon && <Dot $status="Warning" />}
            trailingNode={showRightIcon && <ActionSmallTickIcon />}
            disabled={disabled}
          >
            중앙
          </ButtonGroup.Option>
          <ButtonGroup.Option
            place="right"
            isSelected={seletable ? index === 2 : false}
            onClick={() => setIndex(2)}
            leadingNode={showleftIcon && <Dot $status="Danger" />}
            trailingNode={showRightIcon && <ActionSmallTickIcon />}
            disabled={disabled}
          >
            오른쪽
          </ButtonGroup.Option>
        </Box>
      </Box>
    );
  },
};

export const Option: Story = {
  args: {
    children: "Only option",
    place: "left",
    isSelected: false,
    disabled: false,
  },
  argTypes: {
    place: {
      options: ["left", "middle", "right"],
      control: { type: "radio" },
      description:
        "ButtonGroup으로 감싸서 ButtonGroup.Option을 사용하면 넘겨준 순서에 따라 자동으로 해당 props를 결정합니다.",
    },
  },
  parameters: {
    controls: { exclude: ["children"] },
  },
};
