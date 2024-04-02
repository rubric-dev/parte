import { TextInputVariant } from "./../TextInput/TextInput.types";
import { css } from "styled-components";
import { TextInputSize } from "../TextInput";

export const getHeight = (textInputSize?: TextInputSize) => {
  switch (textInputSize) {
    case "medium":
      return css`
        height: 32px;
      `;
    case "large":
      return css`
        height: 40px;
      `;
    case "x-large":
      return css`
        height: 48px;
      `;
  }
};
export const sizeHandler = (
  variant?: TextInputVariant,
  textInputSize?: TextInputSize
) => {
  if (variant === "text" || variant === "select")
    switch (textInputSize) {
      case "medium":
        return css`
          padding: 8px 12px;
          font-size: 12px;
          line-height: 16px;
        `;
      case "large":
        return css`
          padding: 10px 12px;
          font-size: 14px;
          line-height: 20px;
        `;
      case "x-large":
        return css`
          padding: 14px 12px;
          font-size: 14px;
          line-height: 20px;
        `;
    }
  else
    switch (textInputSize) {
      case "medium":
        return css`
          font-size: 16px;
          line-height: 16px;
          font-weight: 400;
        `;
      case "large":
        return css`
          font-size: 20px;
          line-height: 24px;
          font-weight: 600;
        `;
      case "x-large":
        return css`
          font-size: 26px;
          line-height: 32px;
          font-weight: 600;
        `;
    }
};
