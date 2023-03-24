import "styled-components";
import { Colors, Elevation, Spacing, Typography } from "../@foundations";
import { CommonStyles } from "../@foundations/theme/commonStyles";
import { ColorTokenType } from "../@foundations/theme/colorToken";

declare module "styled-components" {
  interface DefaultTheme extends ColorTokenType {
    colors: Colors;
    spacing: Spacing;
    typography: Typography;
    elevation: Elevation;
    commonStyles: CommonStyles;
  }
}
