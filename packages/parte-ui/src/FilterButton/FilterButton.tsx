import { forwardRef, PropsWithChildren } from "react";
import { FilterTwoIcon } from "../../../parte-icons/src";
import { StyledFilterButton } from "./FilterButton.styled";
import type { FilterButtonProps } from "./FilterButton.types";

export const FilterButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<FilterButtonProps>
>(
  (
    { selectedCount, size = "large", variant = "fill", children, ...rest },
    ref,
  ) => {
    return (
      <StyledFilterButton
        ref={ref}
        $size={size}
        $variant={variant}
        data-active={selectedCount ? selectedCount > 0 : false}
        type="button"
        {...rest}
      >
        <FilterTwoIcon size={size === "large" ? 20 : 16} />
        {children} {selectedCount === 0 ? "" : selectedCount}
      </StyledFilterButton>
    );
  },
);

FilterButton.displayName = "FilterButton";
