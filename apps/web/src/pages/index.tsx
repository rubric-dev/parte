import {
  Badge,
  Box,
  ButtonGroup,
  Checkbox,
  LinkButton,
  Link as ParteLink,
  TextInput,
  Toggle,
} from "@parte-ds/ui";
import Head from "next/head";
import Link from "next/link";
import { AnchorHTMLAttributes, forwardRef, useState } from "react";
import styled, { css, useTheme } from "styled-components";

const MENU = [
  { url: "/input", name: "Input 테스트" },
  { url: "/new-icons", name: "New Icons" },
  { url: "/input-wrapper", name: "Input Wrapper 테스트" },
  { url: "/alert", name: "Alert 테스트" },
  { url: "/radio", name: "Radio 테스트" },
  { url: "/tab-test", name: "Tab 테스트" },
  { url: "/forms", name: "Forms 테스트" },
  { url: "/select", name: "Select 테스트" },
  { url: "/step", name: "Step 테스트" },
];

export default function Home() {
  const { colors } = useTheme();

  const [value, setValue] = useState("2");
  const [toggle, setToggle] = useState(true);

  const [index, setIndex] = useState(0);

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
        <Box
          width="fit-content"
          padding={4}
          backgroundColor="skyblue"
          borderRadius={4}
        >
          <Checkbox label="체크박스" />
        </Box>
        <Checkbox label="체크박스" indeterminate />
        <Checkbox label="체크박스" defaultChecked />
        <Checkbox label="체크박스" disabled />
        <Checkbox label="체크박스" disabled indeterminate />
        <Checkbox label="체크박스" disabled defaultChecked />
        <TextInput type="number" placeholder="spin 버튼 없음" />
        <TextInput
          type="number"
          placeholder="spin 버튼 보여짐"
          showSpinButton
        />
        <Toggle
          defaultChecked={toggle}
          onChange={(e) => setToggle(e.target.checked)}
          label="토글"
        />
        <ButtonGroup>
          <ButtonGroup.Option
            disabled
            isSelected={index === 0}
            onClick={() => setIndex(0)}
            trailingNode={<Badge badgeColor="GREY" text="6" type="pills" />}
          >
            왼쪽 버튼
          </ButtonGroup.Option>
          <ButtonGroup.Option
            isSelected={index === 1}
            onClick={() => setIndex(1)}
            trailingNode={<Badge badgeColor="GREEN" text="6" type="pills" />}
          >
            가운데 버튼
          </ButtonGroup.Option>
          <ButtonGroup.Option
            isSelected={index === 2}
            onClick={() => setIndex(2)}
          >
            오른쪽 버튼
          </ButtonGroup.Option>
        </ButtonGroup>

        <Link href="/input" passHref legacyBehavior>
          <LinkButton>passHref 예시</LinkButton>
        </Link>
        <Link href="/input">네이티브</Link>
        <ParteLink disabled href="/input">
          파르테 링크
        </ParteLink>
      </Box>
    </>
  );
}

const CustomAnchor = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, ...props }, ref) => {
  return (
    <a ref={ref} {...props}>
      {children}
    </a>
  );
});
CustomAnchor.displayName = "CustomAnchor";

const LinkContainer = styled.div`
  ${({ theme }) => {
    return css`
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
    `;
  }}
`;
