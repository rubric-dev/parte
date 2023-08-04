import { default as buttonColorToken } from "./button";
import { default as typographyToken } from "./typography";
import { default as formToken } from "./form";
import { default as generalToken } from "./general";
import { default as dropdownToken } from "./dropdown";
import { default as overlayToken } from "./overlay";
import { default as linkToken } from "./link";
import { ColorKey } from "../../Colors";

export const colorTokens = {
  ...buttonColorToken,
  ...typographyToken,
  ...formToken,
  ...generalToken,
  ...dropdownToken,
  ...overlayToken,
  ...linkToken,
};

export type ColorTokenType = Record<keyof typeof colorTokens, ColorKey>;
