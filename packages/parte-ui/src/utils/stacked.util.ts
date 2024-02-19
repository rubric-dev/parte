import { StackedSize, StackedVariant } from "../Tabs/Stacked";
import {
  stackedPrimaryStyle,
  stackedSecondaryStyle,
} from "../Tabs/Stacked/Stacked.styled";
import { css } from "styled-components";

export const sizeHandler = (size?: StackedSize, variant?: StackedVariant) => {
  switch (size) {
    case "medium":
      return css`
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        height: 32px;
      `;
    case "large":
      return css`
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        height: 40px;
      `;
  }
};

export const getColors = (variant?: StackedVariant) => {
  switch (variant) {
    case "Primary":
      return stackedPrimaryStyle;
    case "Secondary":
      return stackedSecondaryStyle;
  }
};
