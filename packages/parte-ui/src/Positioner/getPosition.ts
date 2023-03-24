import { POSITION, Position } from "./Positioner.types";

type Size = {
  height: number;
  width: number;
};

// FIXME: 이름바꿔야할듯...
type Coordinate = {
  left: number;
  top: number;
};

/**
 * Function to create a Rect.
 * @param {Object} dimensions
 * @param {Number} dimensions.width
 * @param {Number} dimensions.height
 * @param {Object} position
 * @param {Number} position.left
 * @param {Number} position.top
 * @return {Object} Rect { width, height, left, top, right, bottom }
 */
const makeRect = ({ height, width }: Size, { left, top }: Coordinate) => {
  const ceiledLeft = Math.ceil(left);
  const ceiledTop = Math.ceil(top);
  return {
    width,
    height,
    left: ceiledLeft,
    top: ceiledTop,
    right: ceiledLeft + width,
    bottom: ceiledTop + height,
  };
};

/**
 * Function to flip a position upside down.
 * @param {Position} position
 * @return {Position} flipped position
 */
const flipHorizontal = (position: Position) => {
  switch (position) {
    case POSITION.TOP_LEFT:
      return POSITION.BOTTOM_LEFT;
    case POSITION.TOP:
    default:
      return POSITION.BOTTOM;
    case POSITION.TOP_RIGHT:
      return POSITION.BOTTOM_RIGHT;
    case POSITION.BOTTOM_LEFT:
      return POSITION.TOP_LEFT;
    case POSITION.BOTTOM:
      return POSITION.TOP;
    case POSITION.BOTTOM_RIGHT:
      return POSITION.TOP_RIGHT;
  }
};

/**
 * Function that returns if position is aligned on top.
 * @param {Position} position
 * @return {Boolean}
 */
const isAlignedOnTop = (position: Position) => {
  switch (position) {
    case POSITION.TOP_LEFT:
    case POSITION.TOP:
    case POSITION.TOP_RIGHT:
      return true;
    default:
      return false;
  }
};

/**
 * Function that returns if position is aligned left or right.
 * @param {Position} position
 * @return {Boolean}
 */
const isAlignedHorizontal = (position: Position) => {
  switch (position) {
    case POSITION.LEFT:
    case POSITION.RIGHT:
      return true;
    default:
      return false;
  }
};

/**
 * Function that returns if a rect fits on bottom.
 * @param {Rect} rect
 * @param {Object} viewport
 * @param {Number} viewportOffset
 * @return {Boolean}
 */
const getFitsOnBottom = (
  bottomRect: number,
  viewport: Size,
  viewportOffset: number
) => {
  return bottomRect < viewport.height - viewportOffset;
};

/**
 * Function that returns if a rect fits on top.
 * @param {Rect} rect
 * @param {Number} viewportOffset
 * @return {Boolean}
 */
const getFitsOnTop = (topRect: number, viewportOffset: number) => {
  return topRect > viewportOffset;
};

/**
 * Function that returns if a rect fits on right.
 * @param {Rect} rect
 * @param {Object} viewport
 * @param {Number} viewportOffset
 * @return {Boolean}
 */
const getFitsOnRight = (
  rightRect: number,
  viewport: Size,
  viewportOffset: number
) => {
  return rightRect < viewport.width - viewportOffset;
};

/**
 * Function that returns if a rect fits on left.
 * @param {Rect} rect
 * @param {Number} viewportOffset
 * @return {Boolean}
 */
const getFitsOnLeft = (leftRect: number, viewportOffset: number) => {
  return leftRect > viewportOffset;
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
 * Function that returns the CSS `tranform-origin` property.
 * @param {Rect} rect
 * @param {Position} position
 * @param {Object} dimensions — the dimensions of the positioner.
 * @param {Number} targetCenter - center of the target.
 * @return {String} transform origin
 */
const getTransformOrigin = ({
  dimensions,
  position,
  rect,
  targetCenter,
}: {
  dimensions: Size;
  position: Position;
  rect: Coordinate;
  targetCenter: number;
}) => {
  const centerY = Math.round(targetCenter - rect.top);

  if (position === POSITION.LEFT) {
    /* Syntax: x-offset | y-offset */
    return `${dimensions.width}px ${centerY}px`;
  }

  if (position === POSITION.RIGHT) {
    /* Syntax: x-offset | y-offset */
    return `0px ${centerY}px`;
  }

  const centerX = Math.round(targetCenter - rect.left);

  if (isAlignedOnTop(position)) {
    /* Syntax: x-offset | y-offset */
    return `${centerX}px ${dimensions.height}px `;
  }

  /* Syntax: x-offset | y-offset */
  return `${centerX}px 0px `;
};

/**
 * Function that takes in numbers and position and gives the final coords.
 * @param {Object} input
 * @param {Position} input.position — the position the positioner should be on.
 * @param {Object} input.dimensions — the dimensions of the positioner.
 * @param {Object} input.targetRect — the rect of the target.
 * @param {Number} input.targetOffset - offset from the target.
 * @param {Object} input.viewport - the width and height of the viewport.
 * @param {Number} input.viewportOffset - offset from the viewport.
 * @return {Object} - { rect: Rect, position: Position, transformOrigin: string }
 */
export default function getFittedPosition({
  dimensions,
  position,
  targetOffset,
  targetRect,
  viewport,
  viewportOffset = 8,
}: {
  dimensions: Size;
  position: Position;
  targetOffset: number;
  targetRect: DOMRect;
  viewport: Size;
  viewportOffset: number;
}) {
  const { position: finalPosition, rect } = getPosition({
    position,
    dimensions,
    targetRect,
    targetOffset,
    viewport,
    viewportOffset,
  });

  // Push rect to the right if overflowing on the left side of the viewport.
  if (rect.left < viewportOffset) {
    rect.right += Math.ceil(Math.abs(rect.left - viewportOffset));
    rect.left = Math.ceil(viewportOffset);
  }

  // Push rect to the left if overflowing on the right side of the viewport.
  if (rect.right > viewport.width - viewportOffset) {
    const delta = Math.ceil(rect.right - (viewport.width - viewportOffset));
    rect.left -= delta;
    rect.right -= delta;
  }

  // Push rect down if overflowing on the top side of the viewport.
  if (rect.top < viewportOffset) {
    rect.top += Math.ceil(Math.abs(rect.top - viewportOffset));
    rect.bottom = Math.ceil(viewportOffset);
  }

  // Push rect up if overflowing on the bottom side of the viewport.
  if (rect.bottom > viewport.height - viewportOffset) {
    const delta = Math.ceil(rect.bottom - (viewport.height - viewportOffset));
    rect.top -= delta;
    rect.bottom -= delta;
  }

  const targetCenter = isAlignedHorizontal(position)
    ? targetRect.top + targetRect.height / 2
    : targetRect.left + targetRect.width / 2;

  const transformOrigin = getTransformOrigin({
    rect,
    position: finalPosition,
    dimensions,
    targetCenter,
  });

  return {
    rect,
    position: finalPosition,
    transformOrigin,
  };
}

/**
 * Function that takes in numbers and position and gives the final coords.
 * @param {Position} position — the position the positioner should be on.
 * @param {Size} dimensions — the dimensions of the positioner.
 * @param {Rect} targetRect — the rect of the target.
 * @param {Number} targetOffset - offset from the target.
 * @param {Object} viewport - the width and height of the viewport.
 * @param {Object} viewportOffset - offset from the viewport.
 * @return {Object} - { rect: Rect, position: Position }
 */
function getPosition({
  dimensions,
  position,
  targetOffset,
  targetRect,
  viewport,
  viewportOffset = 8,
}: {
  dimensions: Size;
  position: Position;
  targetOffset: number;
  targetRect: DOMRect;
  viewport: Size;
  viewportOffset: number;
}) {
  const isHorizontal = isAlignedHorizontal(position);

  // Handle left and right positions
  if (isHorizontal) {
    const leftRect = getRect({
      position: POSITION.LEFT,
      dimensions,
      targetRect,
      targetOffset,
    });

    const rightRect = getRect({
      position: POSITION.RIGHT,
      dimensions,
      targetRect,
      targetOffset,
    });

    const fitsOnLeft = getFitsOnLeft(leftRect.left, viewportOffset);
    const fitsOnRight = getFitsOnRight(
      rightRect.right,
      viewport,
      viewportOffset
    );

    if (position === POSITION.LEFT) {
      if (fitsOnLeft) {
        return {
          position,
          rect: leftRect,
        };
      }

      if (fitsOnRight) {
        return {
          position: POSITION.RIGHT,
          rect: rightRect,
        };
      }
    }

    if (position === POSITION.RIGHT) {
      if (fitsOnRight) {
        return {
          position,
          rect: rightRect,
        };
      }

      if (fitsOnLeft) {
        return {
          position: POSITION.LEFT,
          rect: leftRect,
        };
      }
    }

    // Default to using the position with the most space
    const spaceRight = Math.abs(
      viewport.width - viewportOffset - rightRect.right
    );
    const spaceLeft = Math.abs(leftRect.left - viewportOffset);

    if (spaceRight < spaceLeft) {
      return {
        position: POSITION.RIGHT,
        rect: rightRect,
      };
    }

    return {
      position: POSITION.LEFT,
      rect: leftRect,
    };
  }

  const positionIsAlignedOnTop = isAlignedOnTop(position);
  let topRect;
  let bottomRect;

  if (positionIsAlignedOnTop) {
    topRect = getRect({
      position,
      dimensions,
      targetRect,
      targetOffset,
    });
    bottomRect = getRect({
      position: flipHorizontal(position),
      dimensions,
      targetRect,
      targetOffset,
    });
  } else {
    topRect = getRect({
      position: flipHorizontal(position),
      dimensions,
      targetRect,
      targetOffset,
    });
    bottomRect = getRect({
      position,
      dimensions,
      targetRect,
      targetOffset,
    });
  }

  const topRectFitsOnTop = getFitsOnTop(topRect.top, viewportOffset);

  const bottomRectFitsOnBottom = getFitsOnBottom(
    bottomRect.bottom,
    viewport,
    viewportOffset
  );

  if (positionIsAlignedOnTop) {
    if (topRectFitsOnTop) {
      return {
        position,
        rect: topRect,
      };
    }

    if (bottomRectFitsOnBottom) {
      return {
        position: flipHorizontal(position),
        rect: bottomRect,
      };
    }
  }

  if (!positionIsAlignedOnTop) {
    if (bottomRectFitsOnBottom) {
      return {
        position,
        rect: bottomRect,
      };
    }

    if (topRectFitsOnTop) {
      return {
        position: flipHorizontal(position),
        rect: topRect,
      };
    }
  }

  // Default to most spacious if there is no fit.
  const spaceBottom = Math.abs(
    viewport.height - viewportOffset - bottomRect.bottom
  );

  const spaceTop = Math.abs(topRect.top - viewportOffset);

  if (spaceBottom < spaceTop) {
    return {
      position: positionIsAlignedOnTop ? flipHorizontal(position) : position,
      rect: bottomRect,
    };
  }

  return {
    position: positionIsAlignedOnTop ? position : flipHorizontal(position),
    rect: topRect,
  };
}

/**
 * Function that takes in numbers and position and gives the final coords.
 * @param {Position} position
 * @param {Number} targetOffset - offset from the target.
 * @param {Object} dimensions — the dimensions of the positioner.
 * @param {Rect} targetRect — the rect of the target.
 * @return {Rect} - Rect { width, height, left, top, right, bottom }
 */
function getRect({
  dimensions,
  position,
  targetOffset,
  targetRect,
}: {
  dimensions: Size;
  position: Position;
  targetOffset: number;
  targetRect: DOMRect;
}): {
  width: number;
  height: number;
  left: number;
  top: number;
  right: number;
  bottom: number;
} {
  const leftRect =
    targetRect.left + targetRect.width / 2 - dimensions.width / 2;
  const alignedTopY = targetRect.top - dimensions.height - targetOffset;
  const alignedBottomY = targetRect.bottom + targetOffset;
  const alignedRightX = targetRect.right - dimensions.width;
  const alignedLeftRightY =
    targetRect.top + targetRect.height / 2 - dimensions.height / 2;

  switch (position) {
    case POSITION.LEFT:
      return makeRect(dimensions, {
        left: targetRect.left - dimensions.width - targetOffset,
        top: alignedLeftRightY,
      });
    case POSITION.RIGHT:
      return makeRect(dimensions, {
        left: targetRect.right + targetOffset,
        top: alignedLeftRightY,
      });
    case POSITION.TOP:
      return makeRect(dimensions, {
        left: leftRect,
        top: alignedTopY,
      });
    case POSITION.TOP_LEFT:
      return makeRect(dimensions, {
        left: targetRect.left,
        top: alignedTopY,
      });
    case POSITION.TOP_RIGHT:
      return makeRect(dimensions, {
        left: alignedRightX,
        top: alignedTopY,
      });
    default:
    case POSITION.BOTTOM:
      return makeRect(dimensions, {
        left: leftRect,
        top: alignedBottomY,
      });
    case POSITION.BOTTOM_LEFT:
      return makeRect(dimensions, {
        left: targetRect.left,
        top: alignedBottomY,
      });
    case POSITION.BOTTOM_RIGHT:
      return makeRect(dimensions, {
        left: alignedRightX,
        top: alignedBottomY,
      });
  }
}
