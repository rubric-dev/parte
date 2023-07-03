import { Box, Radio } from "@parte-ds/ui";
import { useEffect, useState } from "react";

const RADIO_OPTIONS = [
  { label: "email", value: "email" },
  { label: "mail", value: "mail" },
  { label: "sms", value: "sms" },
];

const RadioTest = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("selected value:", value);
  }, [value]);

  return (
    <Box display="flex" flexDirection="column" gap={16}>
      {RADIO_OPTIONS.map(({ label, value }) => (
        <Radio
          key={label}
          name="test"
          label={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ))}
      <Radio label="테스트3" disabled />
      <Radio label="테스트4" checked disabled />
      <Box
        padding={8}
        backgroundColor="skyblue"
        borderRadius={4}
        width="fit-content"
      >
        <Radio />
      </Box>
    </Box>
  );
};
export default RadioTest;
