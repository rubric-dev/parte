import { ColorKey } from "../../Colors";
import { default as buttonToken } from "./button";
import { default as cardToken } from "./card";
import { default as checkboxToken } from "./checkbox";
import { default as dropdownToken } from "./dropdown";
import { default as formToken } from "./form";
import { default as generalToken } from "./general";
import { default as linkToken } from "./link";
import { default as overlayToken } from "./overlay";
import { default as paginationToken } from "./pagination";
import { default as radioToken } from "./radio";
import { default as rangeSliderToken } from "./rangeSlider";
import { default as selectToken } from "./select";
import { default as selectRowToken } from "./selectRow";
import { default as stepToken } from "./step";
import { default as tabToken } from "./tab";
import { default as toggleToken } from "./toggle";
import { default as typographyToken } from "./typography";

export const colorTokens = {
  ...buttonToken,
  ...cardToken,
  ...checkboxToken,
  ...dropdownToken,
  ...formToken,
  ...generalToken,
  ...linkToken,
  ...overlayToken,
  ...paginationToken,
  ...radioToken,
  ...rangeSliderToken,
  ...selectToken,
  ...selectRowToken,
  ...stepToken,
  ...tabToken,
  ...toggleToken,
  ...typographyToken,
};

export type ColorTokenType = Record<keyof typeof colorTokens, ColorKey>;
