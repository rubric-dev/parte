import "styled-components";
import { ParteTheme } from "@parte-ds/ui";

declare module "styled-components" {
  interface DefaultTheme extends ParteTheme {}
}
