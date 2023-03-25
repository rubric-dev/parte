import { memo } from "react";
import { css, keyframes } from "styled-components";
import { animationEasing } from "../constant";
import { Dialog } from "../Dialog";
import { Overlay } from "../Overlay";
import { DialogModalProps } from "./DialogModal.types";

const ANIMATION_DURATION = 200;
const { acceleration, deceleration } = animationEasing;
const openAnimation = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1
  }
`;

const closeAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1
  }
  to {
    transform: scale(0.8);
    opacity: 0
  }
`;

export const DialogModal = memo(function DialogModal({
  preventBodyScrolling = false,
  shouldAutoFocus = false,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true,
  isShown = false,
  onCloseComplete,
  onOpenComplete,
  sideOffset = "16px",
  topOffset = "12vmin",
  children,
  width = 560,
  ...dialogProps
}: DialogModalProps) {
  const sideOffsetWithUnit = Number.isInteger(sideOffset)
    ? `${sideOffset}px`
    : sideOffset;
  const maxWidth = `calc(100% - ${sideOffsetWithUnit} * 2)`;

  const topOffsetWithUnit = Number.isInteger(topOffset)
    ? `${topOffset}px`
    : topOffset;
  const maxHeight = `calc(100% - ${topOffsetWithUnit} * 2)`;

  return (
    <Overlay
      isShown={isShown}
      shouldAutoFocus={shouldAutoFocus}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      onExited={onCloseComplete}
      onEntered={onOpenComplete}
      preventBodyScrolling={preventBodyScrolling}
    >
      {({ close, state }) => (
        <Dialog
          close={close}
          width={width}
          {...dialogProps}
          elevation={2}
          state={state}
          overrideStyles={css`
            width: ${width}px;
            max-width: ${maxWidth};
            max-height: ${maxHeight};
            margin: ${topOffsetWithUnit} ${sideOffsetWithUnit};
            &[data-state="entering"] {
              animation: ${openAnimation} ${ANIMATION_DURATION}ms
                ${deceleration} both;
            }
            &[data-state="entered"] {
              animation: ${openAnimation} ${ANIMATION_DURATION}ms
                ${deceleration} both;
            }
            &[data-state="exiting"] {
              animation: ${closeAnimation} ${ANIMATION_DURATION}ms
                ${acceleration} both;
            }
          `}
        >
          {children}
        </Dialog>
      )}
    </Overlay>
  );
});
