/* eslint-disable react/jsx-key */
// getTickProps, getSegmentProps, getSegmentProps, getHandleProps에
// 각각 Key가 다 포함되어있는데 TS에서 추론을 못하네요.
import { useEffect, useState } from "react";
import { useRanger } from "react-ranger";
import styled, { css } from "styled-components";
import { Box } from "../Layout";
import { RangeSliderProps, TickType } from "./RangeSlider.types";

const TRACK_HEIGHT = 6;
const HANDLE_SIZE = 16;

export function RangeSlider({
  label,
  disabled,
  valueFormatter = String,
  ...rangerOptions
}: RangeSliderProps) {
  const { min, max, values } = rangerOptions;
  const isRangeValue = values.length === 2;
  const { getTrackProps, ticks, segments, handles } = useRanger({
    ticks: [min, max],
    ...rangerOptions,
  });

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Wrapper>
      {label && <Label $disabled={disabled}>{label}</Label>}
      <TrackContainer $isRangeValue={isRangeValue}>
        <Track {...getTrackProps()}>
          {ticks.map(({ value, getTickProps }) => {
            let type: TickType = null;
            if (value === min) type = "first";
            if (value === max) type = "last";
            return (
              <Tick {...getTickProps()}>
                <TickLabel $type={type}>{valueFormatter(value)}</TickLabel>
              </Tick>
            );
          })}
          {segments.map(({ getSegmentProps }, i) => {
            let isInRange = false;
            switch (values.length) {
              case 1:
                isInRange = i === 0;
                break;
              case 2:
                isInRange = i === 1;
                break;
              default:
                isInRange = true;
            }
            return (
              <Segment
                {...getSegmentProps()}
                $isInRange={isInRange}
                data-disabled={disabled}
              />
            );
          })}
          {handles.map(({ value, active, getHandleProps }) => {
            const handleProps = getHandleProps({
              style: {
                appearance: "none",
                border: "none",
                background: "transparent",
                outline: "none",
              },
            });
            return (
              <button
                {...handleProps}
                onMouseDown={(e) => {
                  handleProps.onMouseDown(e);
                  setIsDragging(true);
                }}
                onMouseUp={() => setIsDragging(false)}
                disabled={disabled}
              >
                <Handle
                  active={active}
                  data-disabled={disabled}
                  data-value={valueFormatter(value)}
                />
              </button>
            );
          })}
        </Track>
        {isDragging && !disabled && (
          <style>{`
            * {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              -khtml-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              cursor: grabbing !important;
            }
            *:hover {
              pointer-events: none !important;
            }
          `}</style>
        )}
      </TrackContainer>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.span<{ $disabled?: boolean }>`
  ${({ theme, $disabled }) => css`
    ${theme.typography.H300}
    color: ${$disabled ? theme.colors.N700 : theme.colors.N800};
  `}
`;

const TrackContainer = styled.div<{ $isRangeValue: boolean }>`
  ${({ theme, $isRangeValue }) => css`
    height: ${TRACK_HEIGHT}px;
    width: inherit;
    padding: 0 8px;

    display: flex;
    align-items: center;
    background: ${`linear-gradient(to right, ${
      $isRangeValue ? theme.colors.T100 : theme.colors.T400
    } 50%, ${theme.colors.T100} 50%)`};
    border-radius: 4px;

    &:has(button:disabled) {
      background: ${`linear-gradient(to right, ${
        $isRangeValue ? theme.colors.N300 : theme.colors.N500
      } 50%, ${theme.colors.N300} 50%)`};
    }
  `}
`;

export const Track = styled.div`
  display: inline-block;
  height: inherit;
  width: inherit;
`;

export const Tick = styled.div`
  bottom: 0px;
`;

export const TickLabel = styled.div<{ $type?: TickType }>`
  ${({ theme, $type }) => {
    let translateX = "-50%";
    if ($type === "first") translateX = "calc(0% - 8px)";
    if ($type === "last") translateX = "calc(-100% + 8px)";
    return css`
      position: absolute;
      top: 0px;
      transform: ${`translate(${translateX}, 6px)`};

      color: ${theme.colors.N500};
      ${theme.typography.C200}
      white-space: nowrap;
    `;
  }}
`;

export const Segment = styled.div<{ $isInRange: boolean }>`
  ${({ theme, $isInRange }) => css`
    background: ${$isInRange ? theme.colors.T400 : theme.colors.T100};
    height: 100%;
    &[data-disabled="true"] {
      background: ${$isInRange ? theme.colors.N500 : theme.colors.N300};
    }
  `}
`;

export const Handle = styled.div<{ active?: boolean }>`
  ${({ theme, active }) => css`
    position: relative;
    width: ${HANDLE_SIZE}px;
    height: ${HANDLE_SIZE}px;
    border-radius: 100%;
    background: ${theme.colors.T400};
    ${active && theme.commonStyles.outline}

    &[data-disabled="true"] {
      background: ${theme.colors.N500};
    }
    &:not([data-disabled="true"]):hover {
      cursor: grab;
    }
    &:not([data-disabled="true"]):active {
      cursor: grabbing;
    }

    &:hover,
    &:active {
      &::after {
        content: attr(data-value);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: calc(100% + 6px);

        display: inline-flex;
        padding: 8px 16px;
        align-items: center;
        gap: 8px;

        border-radius: 8px;
        background: ${theme.colors.N800};

        box-shadow: 0px 4px 8px 0px rgba(16, 24, 64, 0.08);
        color: ${theme.colors.N0};
      }
    }
  `}
`;
