import { Box, Tab, Tabs } from "@parte-ds/ui";
import Link from "next/link";
import { useState } from "react";

const TAB_LIST = [
  { label: "Google", value: "https://www.google.com" },
  {
    label: "Naver",
    value: "https://www.naver.com",
  },
  {
    label: "Bing",
    value: "https://www.bing.com",
  },
];

const TabTest = () => {
  const [idx, setIdx] = useState(0);
  return (
    <Box padding={30}>
      <Tabs>
        {TAB_LIST.map(({ label, value }, i) => (
          <Tab
            key={label}
            variant="Primary"
            selected={i === idx}
            onClick={() => setIdx(i)}
            // disabled
          >
            <Link href={value} tabIndex={-1}>
              {label}
            </Link>
          </Tab>
        ))}
      </Tabs>
    </Box>
  );
};
export default TabTest;
