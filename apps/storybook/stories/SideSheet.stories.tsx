import {
  Box,
  Button,
  SideSheet,
  SideSheetProps,
  Tab,
  Tabs,
} from "@parte-dev/ui";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import styled, { css } from "styled-components";

export default {
  title: "Components/Overlays/SideSheet",
  component: SideSheet,
  parameters: {
    layout: "centered",
    viewport: "responsive",
  },
} as Meta;

const Template: Story<SideSheetProps> = ({ ...args }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}
    >
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open SideSheet
      </Button>
      <div style={{ width: "100%", height: "1000px" }} />
      <SideSheet
        {...args}
        isShown={open}
        onCloseComplete={() => setOpen(false)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  preventBodyScrolling: false,
  shouldCloseOnEscapePress: true,
  shouldCloseOnOverlayClick: true,
};

const Containter = styled(Box)``;
const Header = styled(Box)`
  ${({ theme }) => css`
    ${theme.typography.P200}
    color: ${theme.colors.N700};
    border-bottom: 1px solid ${theme.colors.N200};
  `}
`;
const Title = styled.h4`
  ${({ theme }) => css`
    ${theme.typography.H600}
    color: ${theme.colors.N900};
  `}
`;

const TabList = styled(Box)`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.N200};
  `}
`;

const Body = styled(Box)`
  ${({ theme }) => css`
    background: rgb(250, 251, 255);
    border-bottom: 1px solid ${theme.colors.N200};
    height: 100%;
  `}
`;
const Card = styled(Box)`
  ${({ theme }) => css`
    background: ${theme.colors.N0};
    border-bottom: 1px solid ${theme.colors.N200};
    height: 240px;
    box-shadow: rgb(67 90 111 / 30%) 0px 0px 1px;
    border-radius: 4px;

    ${theme.typography.H600}
  `}
`;

const Featured: Story<SideSheetProps> = ({ ...args }) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}
    >
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open SideSheet
      </Button>
      <div style={{ width: "100%", height: "1000px" }} />
      <SideSheet
        {...args}
        isShown={open}
        onCloseComplete={() => setOpen(false)}
      >
        <Containter flexDirection="column" width="100%">
          <Header
            padding={32}
            paddingTop={24}
            paddingBottom={24}
            flexDirection="column"
            width="100%"
          >
            <Title>Title</Title>
            Optional description or sub title
          </Header>
          <TabList padding={8} paddingLeft={32} paddingRight={32} width="100%">
            <Tabs>
              {["Traits", "Event History", "Identities"].map((tab, index) => (
                <Tab
                  key={tab}
                  variant="Secondary"
                  selected={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                >
                  {tab}
                </Tab>
              ))}
            </Tabs>
          </TabList>
        </Containter>
        <Body
          width="100%"
          padding={16}
          paddingTop={24}
          paddingLeft={32}
          paddingRight={32}
        >
          <Card display="flex" alignItems="center" justifyContent="center">
            Some content
          </Card>
        </Body>
      </SideSheet>
    </div>
  );
};
export const FullFeatured = Featured.bind({});
FullFeatured.args = {
  preventBodyScrolling: false,
  shouldCloseOnEscapePress: true,
  shouldCloseOnOverlayClick: true,
};
