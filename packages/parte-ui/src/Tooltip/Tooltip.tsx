import { TooltipProps } from "./Tooltip.types";
import * as Styled from "./Tooltip.styled";
import { Fragment, useState } from "react";
import { POSITION, Positioner } from "../Positioner";

export const Tooltip = ({
  children,
  content,
  width,
  maxWidth,
  minWidth,
  showDelay = 100,
  hideDelay = 100,
  position = POSITION.BOTTOM,
  isShown = true,
}: TooltipProps) => {
  const child: React.ReactNode =
    typeof content === "string" ? <p>{content}</p> : content;
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);

  return (
    <Fragment>
      <Styled.TargetWrapper ref={setTargetRef}>{children}</Styled.TargetWrapper>
      {isShown && (
        <Positioner
          position={position}
          showDelay={showDelay}
          hideDelay={hideDelay}
          targetEl={targetRef}
        >
          <Styled.Content width={width} maxWidth={maxWidth} minWidth={minWidth}>
            {child}
          </Styled.Content>
        </Positioner>
      )}
    </Fragment>
  );
};

Tooltip.Content = Styled.Content;
