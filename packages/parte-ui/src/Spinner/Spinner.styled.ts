import styled, { css, keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loadingCircleKeyframes = keyframes`
  0% {
    stroke-dashoffset: 600;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const Container = styled.svg`
  animation: ${loadingAnimation} 2s linear infinite;
`;

export const Circle = styled.circle`
  ${({ theme }) => css`
    animation: ${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85)
      infinite;
    fill: transparent;
    stroke: ${theme.colors.N600};
    stroke-dasharray: 300;
    stroke-dashoffset: 600;
    strokelinecap: round;
    stroke-miterlimit: 10;
    strokewidth: 12;
  `}
`;
