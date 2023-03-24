import { HTMLAttributes, ReactNode } from "react";
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { SPACING, Spacing, ElevationToken } from "../@foundations";
import {
  Display,
  FlexDirection,
  JustifyContent,
  AlignItems,
  AlignContent,
  FlexWrap,
  AlignSelf,
} from "../constant";

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
  display?: Display;
  width?: string | number;
  height?: string | number;

  backgroundColor?: string;
  color?: string;

  // flex parent properties
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  flexWrap?: FlexWrap;
  gap?: Spacing[keyof typeof SPACING];
  rowGap?: Spacing[keyof typeof SPACING];
  columnGap?: Spacing[keyof typeof SPACING];

  // flex child properties
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  flex?: string;
  alignSelf?: AlignSelf;

  // grid parent properties
  gridTemplateColumns?: string;
  gridTemplateRows?: string;

  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;

  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;

  elevation?: ElevationToken;

  /**
   * @uxpinignoreprop
   */
  overrideStyles?: FlattenInterpolation<
    ThemedStyledProps<BoxProps, DefaultTheme>
  >;
  /**
   * @uxpinignoreprop
   */
  children?: ReactNode;
};
