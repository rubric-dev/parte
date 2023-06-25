import { Box, Checkbox, Toggle } from "@parte-ds/ui";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled, { css, useTheme } from "styled-components";

const MENU = [
  { url: "/input", name: "Input 테스트" },
  { url: "/new-icons", name: "New Icons" },
  { url: "/input-wrapper", name: "Input Wrapper 테스트" },
  { url: "/alert", name: "Alert 테스트" },
  { url: "/radio", name: "Radio 테스트" },
];

export default function Home() {
  const { colors } = useTheme();

  const [value, setValue] = useState("2");
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Head>
        <title>Parte</title>
        <meta name="description" content="Parte design system playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        display="flex"
        flexDirection="column"
        padding={16}
        gap={8}
        // backgroundColor={colors.N100}
        height="100%"
      >
        {MENU.map(({ url, name }) => (
          <LinkContainer key={name}>
            <Link href={url}>{name}</Link>
          </LinkContainer>
        ))}
        <Checkbox label="체크박스" />
        <Checkbox label="체크박스" indeterminate />
        <Checkbox label="체크박스" defaultChecked />
        <Checkbox label="체크박스" disabled />
        <Checkbox label="체크박스" disabled indeterminate />
        <Checkbox label="체크박스" disabled defaultChecked />

        <Toggle on={toggle} onChange={(v) => setToggle(v)} label="토글" />
      </Box>
    </>
  );
}

const LinkContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colorTextLink};
    ${theme.typography.H400}
    cursor: pointer;

    &:hover {
      color: ${theme.colorTextLinkHover};
    }
    &:active {
      color: ${theme.colorTextLinkPressed};
    }
    &:focus {
      color: ${theme.colorTextLinkFocused};
      ${theme.commonStyles.outline};
      border-radius: ${theme.spacing.spacing4}px;
    }
    &:visited {
      color: ${theme.colorTextLinkVisited};
    }
  `}
`;
