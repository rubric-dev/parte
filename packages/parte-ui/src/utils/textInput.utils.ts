import { css } from "styled-components";
import { TextInputSize } from "../TextInput";

export const sizeHandler = (textInputSize?: TextInputSize) => {
  switch (textInputSize) {
    case "medium":
      return css`
        height: 32px;
        padding: 8px 12px;
        font-size: 12px;
        line-height: 16px;
      `;
    case "large":
      return css`
        height: 40px;
        padding: 10px 12px;
        font-size: 14px;
        line-height: 20px;
      `;
    case "x-large":
      return css`
        height: 48px;
        padding: 14px 12px;
        font-size: 14px;
        line-height: 20px;
      `;
  }
};
