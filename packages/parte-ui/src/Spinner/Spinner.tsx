import { memo } from "react";
import { Box } from "../Layout";
import * as Styled from "./Spinner.styled";
import { SpinnerProps } from "./Spinner.types";

export const Spinner = memo(({ size = 24 }: SpinnerProps) => {
  return (
    <Box
      width={size}
      height={size}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Styled.Container x="0px" y="0px" viewBox="0 0 150 150">
        <Styled.Circle cx="75" cy="75" r="60" />
      </Styled.Container>
    </Box>
  );
});
