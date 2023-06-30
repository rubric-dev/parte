import { PropsWithChildren, cloneElement } from "react";
import { Box, BoxProps } from "../Layout";
import { ButtonGroupOpion } from "./ButtonGroupOption";

export const ButtonGroup = ({
  children,
  ...props
}: PropsWithChildren<BoxProps>) => {
  if (!Array.isArray(children)) {
    throw new Error(
      "ButtonGroup의 children은 최소 2개 이상의 Button으로 구성해야합니다 "
    );
  }

  return (
    <Box display="flex" flexDirection="row" {...props}>
      {children.map((button, index) => {
        let place = "middle";
        if (index === 0) place = "left";
        if (index === children.length - 1) place = "right";

        return cloneElement(button, { place });
      })}
    </Box>
  );
};
ButtonGroup.Option = ButtonGroupOpion;
