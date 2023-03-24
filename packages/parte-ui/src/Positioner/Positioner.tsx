import { cloneElement, useCallback, useEffect, useRef, useState } from "react";
import { delay, fromEvent, Subscription } from "rxjs";
import { Transition, TransitionStatus } from "react-transition-group";
import { Dimension, PositionerProps } from "./Positioner.types";
import * as Styled from "./Positioner.styled";
import usePrevious from "../hooks/usePrevious";
import getPosition from "./getPosition";
import { Portal } from "../Portal";

const initialDimensions = {
  left: 0,
  top: 0,
  height: 0,
  width: 0,
  transformOrigin: null,
};

export const Positioner = ({
  position,
  hideDelay,
  showDelay,
  children,
  targetEl,
}: PositionerProps) => {
  const [isShownByTooltip, setIsShownByTooltip] = useState(false);
  const [isShownByTarget, setIsShownByTarget] = useState(false);
  const isShown = isShownByTooltip || isShownByTarget;

  const [dimensions, setDimensions] = useState<Dimension>(initialDimensions);
  const latestAnimationFrame = useRef<number>();
  const mouseleaveSubscribe = useRef<Subscription>();
  const positionerRef = useRef<HTMLDivElement>(null);
  const previousDimensions = usePrevious(dimensions, initialDimensions);
  const transitionState = useRef<TransitionStatus>("exited");

  useEffect(() => {
    if (targetEl) {
      const observerMouseOver$ = fromEvent(targetEl, "mouseenter", {
        capture: true,
      }).pipe(delay(showDelay));
      const observerMouseOut$ = fromEvent(targetEl, "mouseleave").pipe(
        delay(hideDelay)
      );
      const subMouseOver = observerMouseOver$.subscribe(() =>
        setIsShownByTarget(true)
      );
      const subMouseOut = observerMouseOut$.subscribe(() => {
        setIsShownByTarget(false);
      });
      return () => {
        subMouseOver.unsubscribe();
        subMouseOut.unsubscribe();
      };
    }
  }, [targetEl]);

  const update = useCallback(
    (prevHeight = 0, prevWidth = 0) => {
      if (!isShown || !targetEl || !positionerRef.current) return;

      const targetRect = targetEl.getBoundingClientRect();

      const hasEntered =
        positionerRef.current.getAttribute("data-state") === "entered";

      const viewportHeight = document.documentElement.clientHeight;
      const viewportWidth = document.documentElement.clientWidth;

      let height;
      let width;
      if (hasEntered) {
        // Only when the animation is done should we opt-in to `getBoundingClientRect`
        const positionerRect = positionerRef.current.getBoundingClientRect();

        // https://github.com/segmentio/evergreen/issues/255
        // We need to ceil the width and height to prevent jitter when
        // the window is zoomed (when `window.devicePixelRatio` is not an integer)
        height = Math.round(positionerRect.height);
        width = Math.round(positionerRect.width);
      } else {
        // When the animation is in flight use `offsetWidth/Height` which
        // does not calculate the `transform` property as part of its result.
        // There is still change on jitter during the animation (although unoticable)
        // When the browser is zoomed in — we fix this with `Math.max`.
        height = Math.max(positionerRef.current.offsetHeight, prevHeight);
        width = Math.max(positionerRef.current.offsetWidth, prevWidth);
      }

      const { rect, transformOrigin } = getPosition({
        position,
        targetRect,
        targetOffset: 6,
        dimensions: {
          height,
          width,
        },
        viewport: {
          width: viewportWidth,
          height: viewportHeight,
        },
        viewportOffset: 6,
      });

      setDimensions({
        left: rect.left,
        top: rect.top,
        height,
        width,
        transformOrigin,
      });
    },
    [isShownByTarget, isShownByTooltip, position, targetEl]
  );

  useEffect(() => {
    if (transitionState.current === "entered") {
      latestAnimationFrame.current = requestAnimationFrame(() => {
        update(previousDimensions.height, previousDimensions.width);
      });
    }

    return () => {
      if (latestAnimationFrame.current) {
        cancelAnimationFrame(latestAnimationFrame.current);
      }
    };
  }, [previousDimensions.height, previousDimensions.width, update, children]);

  const handleEntering = () => {
    transitionState.current = "entering";
    update();
  };

  const handleEnter = () => {
    transitionState.current = "entered";
    update();
  };

  const handleExited = () => {
    transitionState.current = "exited";
    setDimensions(initialDimensions);
    mouseleaveSubscribe.current?.unsubscribe();
  };

  const handleEntered = () => {
    if (positionerRef.current) {
      const observerMouseOut$ = fromEvent(
        positionerRef.current,
        "mouseleave"
      ).pipe(delay(hideDelay));

      mouseleaveSubscribe.current = observerMouseOut$.subscribe(() => {
        setIsShownByTooltip(false);
      });
    }
  };

  useEffect(() => {
    const reflowUpdate = () => {
      update();
    };

    window.addEventListener("resize", reflowUpdate);
    window.addEventListener("scroll", reflowUpdate);

    return () => {
      window.removeEventListener("resize", reflowUpdate);
      window.removeEventListener("scroll", reflowUpdate);
    };
  }, [update]);

  return (
    <Transition
      nodeRef={positionerRef}
      timeout={0}
      appear
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExited}
      unmountOnExit
      in={isShown}
    >
      {(state) => {
        return (
          <Portal>
            {cloneElement(
              <Styled.Content
                state={state}
                dimension={dimensions}
                ref={positionerRef}
                data-state={state}
                onMouseEnter={() => {
                  setIsShownByTooltip(true);
                }}
              >
                {children}
              </Styled.Content>
            )}
          </Portal>
        );
      }}
    </Transition>
  );
};
