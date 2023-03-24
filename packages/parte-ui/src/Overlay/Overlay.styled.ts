import styled, { css, keyframes } from 'styled-components';
import { animationEasing } from '../constant';
import { Box } from '../Layout';

const { deceleration, acceleration } = animationEasing;

export const ANIMATION_DURATION = 240;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const BackDrop = styled(Box)`
  ${({ theme }) => css`
    background-color: ${theme.colorModalBackground};
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;

    &[data-state='entering'] {
      animation: ${fadeInAnimation} ${ANIMATION_DURATION}ms ${deceleration} both;
    }
    &[data-state='entered'] {
      animation: ${fadeInAnimation} ${ANIMATION_DURATION}ms ${deceleration} both;
    }
    &[data-state='exiting'] {
      animation: ${fadeOutAnimation} ${ANIMATION_DURATION}ms ${acceleration}
        both;
    }
    &[data-state='exited'] {
      animation: ${fadeOutAnimation} ${ANIMATION_DURATION}ms ${acceleration}
        both;
    }
  `}
`;
