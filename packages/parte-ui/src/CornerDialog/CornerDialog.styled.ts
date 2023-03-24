import styled, { css, keyframes } from 'styled-components';
import { animationEasing } from '../constant';
import { Box } from '../Layout';

const { spring, acceleration } = animationEasing;
export const ANIMATION_DURATION = 240;

const openAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const closeAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.9);
    opacity: 0;
  }
`;
export const DialogContainer = styled(Box)`
  ${() => css`
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: fit-content;

    &[data-state='entering'] {
      animation: ${openAnimation} ${ANIMATION_DURATION}ms ${spring} both;
    }
    &[data-state='entered'] {
      animation: ${openAnimation} ${ANIMATION_DURATION}ms ${spring} both;
    }
    &[data-state='exiting'] {
      animation: ${closeAnimation} 120ms ${acceleration} both;
    }
  `}
`;
