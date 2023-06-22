import {
  Box,
  Button,
  Checkbox,
  Select,
  TagInput,
  TextInput,
  Textarea,
} from "@parte-ds/ui";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled, { css, useTheme } from "styled-components";

export default function Home() {
  const { colors } = useTheme();
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Head>
        <title>Parte</title>
        <meta name="description" content="Parte design system playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box display="flex" padding={16} gap={8}>
          <LinkContainer>
            <Link href="/input">Input 테스트</Link>
          </LinkContainer>
          <LinkContainer>
            <Link href="/new-icons">새로운 아이콘들</Link>
          </LinkContainer>
        </Box>
        <Box padding={30} display="flex" flexDirection="column" gap={4}>
          <TextInput label="test" direction="horizontal" width={160} />
          <Select
            type="static"
            showSearchIcon
            label="test test test"
            direction="horizontal"
            width={160}
          />
          <Textarea label="test" direction="horizontal" width={160} />
          <TagInput values={[]} onAdd={() => {}} onRemove={() => {}} />
          <Box
            width="100%"
            backgroundColor={colors.T100}
            display="flex"
            flexWrap="wrap"
          >
            <Select
              type="static"
              showSearchIcon
              label="Label"
              direction="horizontal"
              width={160}
            />
            <Button>버튼</Button>
          </Box>
          <Box display="flex" flexDirection="column" padding={30} gap={16}>
            <Checkbox label="비제어 컴포넌트" />
            <Checkbox
              label="제어 컴포넌트"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Checkbox label="결정안됨" indeterminate />
            <Checkbox label="불가능" disabled />
            <Checkbox label="불가능 그리고 쳌" disabled checked />
            <Checkbox label="불가능 그리고 결정안됨" disabled indeterminate />
          </Box>
        </Box>
      </main>
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
