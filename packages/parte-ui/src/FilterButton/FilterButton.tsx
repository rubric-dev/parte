import { forwardRef } from "react";
import { FilterButtonProps } from "./FilterButton.types";
import { FilterTwoIcon } from "../../../parte-icons/src";
import { StyledFilterButton } from "./FilterButton.styled";
import { Caption } from "../@foundations";

export const FilterButton = ({
  selectedCount,
  size = "large",
  type = "fill",
  text = "필터",
}: FilterButtonProps) => {
  return (
    <StyledFilterButton
      selectedCount={selectedCount}
      size={size}
      type={type}
      data-selected={selectedCount ? selectedCount > 0 : false}
    >
      <FilterTwoIcon size={size === "large" ? 20 : 16} />
      <Caption size={size === "large" ? 300 : 200}>
        {text} {selectedCount === 0 ? "" : selectedCount}
      </Caption>
    </StyledFilterButton>
  );
};

FilterButton.displayName = "FilterButton";
