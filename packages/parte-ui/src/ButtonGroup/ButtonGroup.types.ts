import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

export type ButtonGroupPlace = "left" | "middle" | "right";

export type ButtonGroupOptionProps = PropsWithChildren<
  HTMLAttributes<HTMLButtonElement> & {
    leadingNode?: ReactNode;
    trailingNode?: ReactNode;
    place?: ButtonGroupPlace;
    isSelected?: boolean;
    disabled?: boolean;
  }
>;
