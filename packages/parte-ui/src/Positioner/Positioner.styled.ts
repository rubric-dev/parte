import { TransitionStatus } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { Dimension } from './Positioner.types';

export const Content = styled.div<{
  state: TransitionStatus;
  dimension: Dimension;
}>`
  ${({ state, dimension }) => css`
    z-index: 999;
    position: fixed;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.175);
    transition-property: opacity, transform;
    transform-origin: ${dimension.transformOrigin};
    transform: scale(0.8) translateY(-1px);
    font-weight: normal;
    top: ${dimension.top}px;
    left: ${dimension.left}px;
    ${(state === 'entering' || state === 'entered') &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    `}
    ${(state === 'exiting' || state === 'exited') &&
    css`
      opacity: 0;
      transform: scale(1);
    `};
  `}
`;
