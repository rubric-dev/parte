import { css } from "styled-components";
import { COLORS } from "./Colors";
import { CustomTheme } from "./ThemeProvider";

const buttonColorToken = {
  colorBackgroundButtonPrimary: "T400",
  colorBackgroundButtonPrimaryHover: "T500",
  colorBackgroundButtonPrimaryActive: "T600",
  colorBackgroundButtonPrimaryFocused: "T500",
  colorBackgroundButtonPrimaryDisabled: "T200",
  colorTextButtonPrimary: "N0",
  colorTextButtonPrimaryHover: "N0",
  colorTextButtonPrimaryActive: "N0",
  colorTextButtonPrimaryFocused: "N0",
  colorTextButtonPrimaryDisabled: "N0",

  colorBackgroundButtonSecondary: "N0",
  colorBackgroundButtonSecondaryHover: "N0",
  colorBackgroundButtonSecondaryActive: "N100",
  colorBackgroundButtonSecondaryFocused: "N0",
  colorBackgroundButtonSecondaryDisabled: "N0",
  colorTextButtonSecondary: "N700",
  colorTextButtonSecondaryHover: "N800",
  colorTextButtonSecondaryActive: "N800",
  colorTextButtonSecondaryFocused: "N800",
  colorTextButtonSecondaryDisabled: "N500",
  colorBorderButtonSecondary: "N400",
  colorBorderButtonSecondaryHover: "N600",
  colorBorderButtonSecondaryActive: "N500",
  colorBorderButtonSecondaryFocused: "N500",
  colorBorderButtonSecondaryDisabled: "N300",

  colorBackgroundButtonSecondaryColored: "N0",
  colorBackgroundButtonSecondaryColoredHover: "N0",
  colorBackgroundButtonSecondaryColoredActive: "T100",
  colorBackgroundButtonSecondaryColoredFocused: "N0",
  colorBackgroundButtonSecondaryColoredDisabled: "N0",
  colorTextButtonSecondaryColored: "T400",
  colorTextButtonSecondaryColoredHover: "T600",
  colorTextButtonSecondaryColoredActive: "T600",
  colorTextButtonSecondaryColoredFocused: "T600",
  colorTextButtonSecondaryColoredDisabled: "T200",
  colorBorderButtonSecondaryColored: "T400",
  colorBorderButtonSecondaryColoredHover: "T600",
  colorBorderButtonSecondaryColoredActive: "T500",
  colorBorderButtonSecondaryColoredFocused: "T500",
  colorBorderButtonSecondaryColoredDisabled: "T100",

  colorBackgroundButtonMinimal: "transparent",
  colorBackgroundButtonMinimalHover: "N100",
  colorBackgroundButtonMinimalActive: "N200",
  colorBackgroundButtonMinimalFocused: "N50",
  colorBackgroundButtonMinimalDisabled: "transparent",
  colorTextButtonMinimal: "N700",
  colorTextButtonMinimalHover: "N800",
  colorTextButtonMinimalActive: "N800",
  colorTextButtonMinimalFocused: "N700",
  colorTextButtonMinimalDisabled: "N400",

  colorBackgroundButtonMinimalColored: "transparent",
  colorBackgroundButtonMinimalColoredHover: "T100",
  colorBackgroundButtonMinimalColoredActive: "T200",
  colorBackgroundButtonMinimalColoredFocused: "T50",
  colorBackgroundButtonMinimalColoredDisabled: "transparent",
  colorTextButtonMinimalColored: "T400",
  colorTextButtonMinimalColoredHover: "T600",
  colorTextButtonMinimalColoredActive: "T600",
  colorTextButtonMinimalColoredFocused: "T600",
  colorTextButtonMinimalColoredDisabled: "T200",

  colorBackgroundButtonError: "R400",
  colorBackgroundButtonErrorHover: "R500",
  colorBackgroundButtonErrorActive: "R600",
  colorBackgroundButtonErrorFocused: "R500",
  colorBackgroundButtonErrorDisabled: "R100",
  colorTextButtonError: "N0",
  colorTextButtonErrorHover: "N0",
  colorTextButtonErrorActive: "N0",
  colorTextButtonErrorFocused: "N0",
  colorTextButtonErrorDisabled: "N0",
};
const typographyToken = {
  colorHeadline: "N900",
  colorHeading: "N800",
  colorParagraph: "N800",
  colorCodeMinimal: "N800",
  colorCodeDefault: "T600",
  colorTextSuccess: "G500",
  colorTextInfo: "T500",
  colorTextWarning: "Y500",
  colorTextError: "R500",
};
const formToken = {
  colorTextPlaceholderDefault: "N600",
  colorTextPlaceholderHover: "N700",
  colorTextPlaceholderFocused: "N700",
  colorTextPlaceholderDisabled: "N600",
  colorTextDefault: "N800",
  colorTextDisabled: "N600",
};

const generalToken = {
  colorBackgroundDefault: "N0",
  colorBackgroundHover: "N0",
  // colorBackgroundDefault: 속성이 없음,
  colorBackgroundFocused: "N50",
  colorBackgroundDisabled: "N100",
  colorBorderDefault: "N400",
  colorBorderHover: "N400",
  // colorBorderDefault: 속성이 없음,
  colorBorderFocused: "T300",
  colorBorderDisabled: "N300",

  colorBackgroundMenu: "N0",
  colorBackgroundMenuHover: "N50",
  colorBackgroundMenuSelected: "T100",
};

const dropdownToken = {
  colorBackgroundDropdown: "N0",
  colorBackgroundDropdownHover: "N50",
  colorBackgroundDropdownSelected: "T100",
};

const linkToken = {
  colorTextLink: "T400",
  colorTextLinkHover: "T500",
  colorTextLinkPressed: "T600",
  colorTextLinkFocused: "T500",
  colorTextLinkDisabled: "N500",
  colorTextLinkVisited: "V400",
};

const commonStyles = {
  outline: css`
    outline: 2px solid ${COLORS.T200};
  `,
};

export const ErpTheme = {
  ...buttonColorToken,
  ...typographyToken,
  ...formToken,
  ...generalToken,
  ...dropdownToken,
  ...linkToken,
  commonStyles,
} as CustomTheme;
