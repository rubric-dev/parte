import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { Dialog } from "../Dialog";
import { Portal } from "../Portal";
import * as Styled from "./CornerDialog.styled";
import { CornerDialogProps } from "./CornerDialog.types";

export const CornerDialog = memo(function CornerDialog(
  props: CornerDialogProps
) {
  const {
    width = 448,
    children,
    isShown,
    onOpenComplete,
    onCloseComplete,
    ...rest
  } = props;

  const [exiting, setExiting] = useState(false);
  const [exited, setExited] = useState(!props.isShown);
  const transitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isShown) {
      setExited(false);
    }
  }, [isShown]);

  const handleExited = useCallback(() => {
    setExiting(false);
    setExited(true);

    onCloseComplete?.();
  }, [onCloseComplete]);

  const handleClose = useCallback(() => setExiting(true), []);

  if (exited) {
    return null;
  }

  return (
    <Portal>
      <Transition
        nodeRef={transitionRef}
        appear
        unmountOnExit
        timeout={Styled.ANIMATION_DURATION}
        in={isShown && !exiting}
        onExited={handleExited}
        onEntered={onOpenComplete}
      >
        {(state) => (
          <Styled.DialogContainer
            ref={transitionRef}
            role="dialog"
            data-state={state}
          >
            <Dialog width={width} {...rest} close={handleClose}>
              {children}
            </Dialog>
          </Styled.DialogContainer>
        )}
      </Transition>
    </Portal>
  );
});
