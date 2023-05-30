import { HTMLAttributes } from "react";
import { type RuleSet } from "styled-components";
import { ElevationToken, SPACING, Spacing } from "../@foundations";
import {
  AlignContent,
  AlignItems,
  AlignSelf,
  Display,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from "../constant";

export type ParteStyledProps = {
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
  borderRadius?: number | string;
  overrideStyles?: RuleSet;
};

export type NativeDivProps = HTMLAttributes<HTMLDivElement>;

export type InnerBoxProps = NativeDivProps & {
  $style: RuleSet;
};
export type BoxProps = NativeDivProps & ParteStyledProps;
