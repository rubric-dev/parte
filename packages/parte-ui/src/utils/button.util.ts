import { css } from "styled-components";
import { ButtonSize, ButtonVariant } from "../Button";
import { theme } from "../@foundations";

export const sizeHandler = (size?: ButtonSize, variant?: ButtonVariant) => {
  if (variant === "text-primary" || variant === "text-secondary")
    switch (size) {
      case "medium":
        return css`
          height: 16px;
          padding: 8px 16px;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
        `;
      case "large":
        return css`
          height: 18px;
          padding: 11px 16px;
          ${theme.typography.C300}
        `;
      case "x-large":
        return css`
          height: 18px;
          padding: 15px 16px;
          ${theme.typography.C300}
        `;
    }
  else
    switch (size) {
      case "medium":
        return css`
          height: 32px;
          padding: 8px 16px;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
        `;
      case "large":
        return css`
          height: 40px;
          padding: 11px 16px;
          ${theme.typography.C300}
        `;
      case "x-large":
        return css`
          height: 48px;
          padding: 15px 16px;
          ${theme.typography.C300}
        `;
    }
};
