import styled, { css, keyframes } from "styled-components";
import { animationEasing } from "../constant";
import { Box } from "../Layout";

const ANIMATION_DURATION = 240;
const { deceleration, acceleration, spring } = animationEasing;

export const ToastContainer = styled.span`
  ${() => css`
    position: fixed;
    top: 10px;
    left: 0;
    right: 0;
    display: flex;
    z-index: 200;
    flex-direction: column;
    margin: 0 auto;
    max-width: 560px;
    pointer-events: none;
  `}
`;

const openAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-120%);
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

export const ToastBox = styled(Box)<{ $marginBottom: number; $height: number }>`
  ${({ $marginBottom, $height, theme }) => css`
    height: ${$height}px;
    margin-bottom: ${$marginBottom}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0px;
    width: 100%;
    height: fit-content;
    transition: all ${ANIMATION_DURATION}ms ${deceleration};

    &[data-state="entering"] {
      animation: ${openAnimation} ${ANIMATION_DURATION}ms ${spring} both;
    }
    &[data-state="entered"] {
      animation: ${openAnimation} ${ANIMATION_DURATION}ms ${spring} both;
    }
    &[data-state="exiting"] {
      animation: ${closeAnimation} 120ms ${acceleration} both;
    }
  `}
`;
