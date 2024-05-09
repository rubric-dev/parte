import {
  memo,
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
  useCallback,
} from "react";
import preventBodyScroll from "../utils/scroll.util";
import { Portal } from "../Portal";
import { OverlayProps } from "./Overlay.types";
import * as Styled from "./Overlay.styled";
import { Transition, TransitionStatus } from "react-transition-group";
import { EnterHandler, ExitHandler } from "react-transition-group/Transition";

export const Overlay = memo(
  ({
    children,
    preventBodyScrolling = true,
    shouldAutoFocus = false,
    shouldCloseOnClick = true,
    shouldCloseOnEsc = true,
    beforeClose,
    isShown,
    onExit,
    onExiting,
    onExited,
    onEnter,
    onEntering,
    onEntered,
  }: OverlayProps) => {
    const [previousActiveElement, setPreviousActiveElement] =
      useState<HTMLElement | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [status, setStatus] = useState<TransitionStatus>(
      isShown ? "entering" : "exited"
    );
    const mouseDownTarget = useRef<EventTarget>();

    useEffect(() => {
      if (isShown) {
        setStatus("entering");
      }
    }, [isShown]);

    const close = useCallback(() => {
      if (beforeClose?.()) return;
      setStatus("exiting");
    }, [beforeClose]);

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && shouldCloseOnEsc) close();
    };

    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */
    const bringFocusInsideOverlay = () => {
      // Always delay focus manipulation to just before repaint to prevent scroll jumping
      return requestAnimationFrame(() => {
        // Container ref may be undefined between component mounting and Portal rendering
        // activeElement may be undefined in some rare cases in IE

        if (
          !shouldAutoFocus ||
          containerRef.current == null ||
          document.activeElement == null ||
          !isShown
        ) {
          return;
        }

        const isFocusOutsideModal = !containerRef.current.contains(
          document.activeElement
        );
        if (isFocusOutsideModal) {
          // Element marked autofocus has higher priority than the other clowns
          const autofocusElement =
            containerRef.current.querySelector("[autofocus]");
          const wrapperElement =
            containerRef.current.querySelector("[tabindex]");
          const buttonElement = containerRef.current.querySelector("button");

          if (autofocusElement) {
            (autofocusElement as HTMLElement).focus();
          } else if (wrapperElement) {
            (wrapperElement as HTMLElement).focus();
          } else if (buttonElement) {
            buttonElement.focus();
          }
        }
      });
    };

    const bringFocusBackToTarget = () => {
      return requestAnimationFrame(() => {
        if (
          previousActiveElement == null ||
          containerRef.current == null ||
          document.activeElement == null
        ) {
          return;
        }

        // Bring back focus on the target.
        const isFocusInsideModal = containerRef.current.contains(
          document.activeElement
        );
        if (document.activeElement === document.body || isFocusInsideModal) {
          previousActiveElement.focus();
        }
      });
    };

    useEffect(() => {
      if (status === "entered") {
        setPreviousActiveElement(document.activeElement as HTMLElement);
        bringFocusInsideOverlay();
      }

      if (status === "entering") {
        document.body.addEventListener("keydown", onEsc, false);
      }

      if (status === "exiting") {
        document.body.removeEventListener("keydown", onEsc, false);
        bringFocusBackToTarget();
      }
    }, [status]);

    const handleBodyScroll = (preventScroll: boolean) => {
      if (preventBodyScrolling) {
        preventBodyScroll(preventScroll);
      }
    };

    useEffect(() => {
      return () => {
        handleBodyScroll(false);
        document.body.removeEventListener("keydown", onEsc, false);
      };
    }, []);

    const handleEnter: EnterHandler<HTMLDivElement> = (isAppearing) => {
      handleBodyScroll(true);
      onEnter?.(isAppearing);
    };

    const handleEntering: EnterHandler<HTMLDivElement> = (isAppearing) => {
      setStatus("entering");
      onEntering?.(isAppearing);
    };

    const handleEntered: EnterHandler<HTMLDivElement> = (isAppearing) => {
      setStatus("entered");
      onEntered?.(isAppearing);
    };

    const handleExit: ExitHandler<HTMLDivElement> = () => {
      handleBodyScroll(false);
      onExit?.();
    };

    const handleExiting: ExitHandler<HTMLDivElement> = () => {
      setStatus("exiting");
      onExiting?.();
    };

    const handleExited: ExitHandler<HTMLDivElement> = () => {
      setStatus("exited");
      onExited?.();
    };

    const handleBackdropClick: MouseEventHandler<HTMLDivElement> = (e) => {
      if (e.target !== e.currentTarget || !shouldCloseOnClick) return;
      close();
    };
    if (status === "exited") {
      return null;
    }

    return (
      <Portal>
        <Transition
          nodeRef={containerRef}
          appear
          unmountOnExit
          timeout={Styled.ANIMATION_DURATION}
          in={isShown && status !== "exiting"}
          onExit={handleExit}
          onExiting={handleExiting}
          onExited={handleExited}
          onEnter={handleEnter}
          onEntering={handleEntering}
          onEntered={handleEntered}
        >
          {(state) => (
            <Styled.BackDrop
              display="flex"
              justifyContent="center"
              ref={containerRef}
              onMouseDown={(e) => (mouseDownTarget.current = e.target)}
              onMouseUp={(e) => {
                if (containerRef.current === mouseDownTarget.current)
                  handleBackdropClick(e);
              }}
              data-state={state}
            >
              {typeof children === "function"
                ? children({ state, close })
                : children}
            </Styled.BackDrop>
          )}
        </Transition>
      </Portal>
    );
  }
);
Overlay.displayName = "Overlay";
