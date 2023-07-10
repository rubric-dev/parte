import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

export type ButtonGroupPlace = "left" | "middle" | "right";

export type ButtonGroupOptionProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    leadingNode?: ReactNode;
    trailingNode?: ReactNode;
    place?: ButtonGroupPlace;
    isSelected?: boolean;
  }
>;
