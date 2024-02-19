import { theme } from "../@foundations/theme/index";
import { css } from "styled-components";
import { TabSize, TabVariant } from "../Tabs";
import { tabPrimaryStyle, tabSecondaryStyle } from "../Tabs/Tab/Tab.styled";

export const sizeHandler = (size?: TabSize, variant?: TabVariant) => {
  switch (size) {
    case "medium":
      return css`
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        height: 24px;
      `;
    case "large":
      return css`
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        height: 28px;
      `;
  }
};

export const getStyles = (variant?: TabVariant) => {
  switch (variant) {
    case "Primary":
      return tabPrimaryStyle;
    case "Secondary":
      return tabSecondaryStyle;
  }
};
export const getLineBackgroundColors = (variant?: TabVariant) => {
  switch (variant) {
    case "Primary":
      return css`
        background-color: ${({ theme }) => theme.colors.B400};
        &[data-selected="false"] {
          background: none;
          &[data-disabled="true"] {
            background: ${theme.colors.N500};
          }
        }
        &[data-disabled="true"] {
          background: ${theme.colors.N500};
          &[data-selected="false"] {
            background: none;
          }
        }
      `;
    case "Secondary":
      return css`
        background-color: ${({ theme }) => theme.colors.N800};
        &[data-selected="false"] {
          background: none;
        }
        &[data-disabled="true"] {
          background: ${theme.colors.N400};
          &[data-selected="false"] {
            background: none;
          }
        }
      `;
  }
};
