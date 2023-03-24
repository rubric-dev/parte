import { memo } from "react";
import { Overlay } from "../Overlay";
import SheetClose from "./SheetClose";
import { SideSheetProps } from "./SideSheet.types";
import * as Styled from "./SideSheet.styled";
import { css } from "styled-components";

export const SideSheet = memo(function SideSheet(props: SideSheetProps) {
  const {
    width = 620,
    isShown,
    children,
    onOpenComplete,
    onCloseComplete,
    beforeClose,
    shouldAutoFocus = false,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEscapePress = true,
    preventBodyScrolling = false,
  } = props;

  return (
    <Overlay
      isShown={isShown}
      shouldAutoFocus={shouldAutoFocus}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEscapePress}
      beforeClose={beforeClose}
      onExited={onCloseComplete}
      onEntered={onOpenComplete}
      preventBodyScrolling={preventBodyScrolling}
    >
      {({ close, state }) => (
        <Styled.Container
          data-state={state}
          overrideStyles={css`
            width: ${width}px;
          `}
        >
          <SheetClose state={state} onClick={close} />
          <Styled.Content
            data-state={state}
            display="flex"
            flexDirection="column"
            overrideStyles={css`
              width: ${width}px;
            `}
          >
            {typeof children === "function" ? children({ close }) : children}
          </Styled.Content>
        </Styled.Container>
      )}
    </Overlay>
  );
});
