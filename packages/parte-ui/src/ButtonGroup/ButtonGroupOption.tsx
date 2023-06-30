import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { ButtonGroupOptionProps } from "./ButtonGroup.types";

const LEADING_NODE = "leading-node";
const TRAILING_NODE = "trailing-node";

/**
 * 🚨 LeadingNode와 TrailingNode의 색상 컨트롤 RULE 🚨
 * 1. LeadingNode와 TrailingNode가 Icon인경우 ButtonGroup에서 색상을 직접 컨트롤한다. (사이즈는 컨트롤하지않음)
 * LeadingNode는 enable/disable일때만 색상이 나뉘고, TrailingNode는 텍스트의 색상을 따라간다.
 *
 * 2. LeadingNode와 TrailingNode가 Icon이 아닌경우 ButtonGroup을 사용하는 측에서 색상을 직접 컨트롤한다.
 * LeadingNode - enable일때는 G400, disable일때 N400 적용
 * TrailingNode가 - enable일때는 T계열 색상, disable일때 N계열 적용
 */
export const ButtonGroupOpion = forwardRef<
  HTMLButtonElement,
  ButtonGroupOptionProps
>(
  (
    {
      children,
      leadingNode,
      trailingNode,
      place,
      isSelected,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        {...props}
        ref={ref}
        data-place={place}
        aria-disabled={disabled}
        disabled={disabled}
        aria-selected={isSelected}
      >
        {leadingNode && (
          <LeadingNode id={LEADING_NODE}>{leadingNode}</LeadingNode>
        )}
        {children}
        {trailingNode && (
          <TrailingNode id={TRAILING_NODE}>{trailingNode}</TrailingNode>
        )}
      </StyledButton>
    );
  }
);

ButtonGroupOpion.displayName = "ButtonGroupOpion";

const StyledButton = styled.button`
  ${({ theme }) => css`
    position: position;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: fit-content;
    &:not(:first-of-type) {
      margin-left: -1px;
    }
    padding: calc(8px - 1px) 16px;
    &:has(#${LEADING_NODE}, #${TRAILING_NODE}) {
      padding: calc(8px - 1px) 12px;
    }
    align-items: center;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;
    z-index: 1;

    //# BORDER RADIUS
    &[data-place="left"] {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &[data-place="middle"] {
      border-radius: 0px;
    }
    &[data-place="right"] {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    //# COLOR

    //## enabled
    border: 1px solid;
    border-color: ${theme.colors.N400};
    background-color: ${theme.colors.N0};
    color: ${theme.colors.N700};

    & #${LEADING_NODE} svg {
      color: ${theme.colors.G400};
    }
    & #${TRAILING_NODE} svg {
      color: ${theme.colors.N700};
    }

    //## hover
    &:hover,
    &[aria-selected="true"]:hover {
      border-color: ${theme.colors.N400};
      background-color: ${theme.colors.N100};
      color: ${theme.colors.N800};
      z-index: 2;
      & #${TRAILING_NODE} svg {
        color: ${theme.colors.N800};
      }
    }

    //## focused
    &:focus {
      border-color: ${theme.colors.T200};
      background-color: ${theme.colors.N0};
      color: ${theme.colors.N700};
      z-index: 2;
      & #${TRAILING_NODE} svg {
        color: ${theme.colors.N700};
      }
    }

    //## pressed
    &:active,
    &[aria-selected="true"]:active {
      border-color: ${theme.colors.N400};
      background-color: ${theme.colors.N200};
      color: ${theme.colors.N800};
      z-index: 2;
      & #${TRAILING_NODE} svg {
        color: ${theme.colors.N800};
      }
    }

    //## selected
    &[aria-selected="true"] {
      border-color: ${theme.colors.N400};
      background-color: ${theme.colors.T50};
      color: ${theme.colors.T400};
      z-index: 2;
      & #${TRAILING_NODE} svg {
        color: ${theme.colors.T400};
      }
    }

    //## disabled
    &[aria-disabled="true"] {
      cursor: default;
      border-color: ${theme.colors.N400};
      background-color: ${theme.colors.N0};
      color: ${theme.colors.N500};
      & #${LEADING_NODE} svg {
        color: ${theme.colors.N400};
      }
      & #${TRAILING_NODE} svg {
        color: ${theme.colors.N500};
      }
    }

    //## disabled + selected
    &[aria-selected="true"][aria-disabled="true"] {
      cursor: default;
      border-color: ${theme.colors.N400};
      background-color: ${theme.colors.N100};
      color: ${theme.colors.N500};
      & #${TRAILING_NODE} svg {
        color: ${theme.colors.N500};
      }
    }
  `}
`;

const LeadingNode = styled.div`
  ${() => css`
    margin-right: 8px;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
  `}
`;

const TrailingNode = styled.div`
  ${() => css`
    margin-left: 10px;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
  `}
`;
