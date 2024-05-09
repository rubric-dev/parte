import { forwardRef, useEffect, useRef } from "react";
import { ActionSearchIcon } from "../../../../parte-icons/src";
import { Checkbox } from "../../Checkbox";
import * as Styled from "./SelectRow.styled";
import {
  SelectRowElement,
  SelectRowProps,
  SelectRowSearch,
  SelectRowTitle,
} from "./SelectRow.types";

const SearchRow = forwardRef<HTMLDivElement, SelectRowSearch>((props, ref) => {
  const { inputValue, onChange } = props;
  return (
    <Styled.SelectRow $variant="search" ref={ref} role="selectItemSearch">
      <ActionSearchIcon size={12} color="N600" />
      <Styled.SearchInput
        role="selectItemSearchInput"
        placeholder={props.placeholder ?? "Search"}
        value={inputValue}
        autoFocus
        onChange={onChange}
      />
    </Styled.SelectRow>
  );
});

const TitleRow = forwardRef<HTMLDivElement, SelectRowTitle>((props, ref) => {
  return (
    <Styled.SelectRow
      $variant="title"
      ref={ref}
      role="selectItemTitle"
      marginTop={props.isSearchable ? 12 : 8}
    >
      {props.icon}
      {props.children}
    </Styled.SelectRow>
  );
});

const ElementRow = forwardRef<HTMLDivElement, SelectRowElement>(
  (
    {
      selected,
      shouldFocusWhenSelected = true,
      disabled,
      onClick,
      onKeyDown,
      icon,
      children,
      isMulti = false,
    },
    ref
  ) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (rowRef.current && ref !== null) {
        if (typeof ref === "function") {
          ref(rowRef.current);
          return;
        }
        ref.current = rowRef.current;
      }
    }, []);

    useEffect(() => {
      if (selected && rowRef.current && shouldFocusWhenSelected)
        rowRef.current.focus();
    }, [selected, shouldFocusWhenSelected]);
    return (
      <Styled.SelectRow
        $variant="element"
        tabIndex={disabled ? -1 : 0}
        ref={rowRef}
        role="selectItem"
        data-disabled={disabled}
        data-selected={selected}
        onClick={(e) => {
          if (e.target === checkboxRef.current) return;
          onClick?.();
        }}
        onKeyDown={onKeyDown}
        $isMulti={isMulti}
      >
        {isMulti && <Checkbox ref={checkboxRef} checked={selected} readOnly />}
        {icon}
        {children}
      </Styled.SelectRow>
    );
  }
);

export const SelectRow = forwardRef<HTMLDivElement, SelectRowProps>(
  (props, ref) => {
    if (props.variant === "search") {
      return <SearchRow ref={ref} {...props} />;
    }
    if (props.variant === "title") {
      return <TitleRow ref={ref} {...props} />;
    }
    return <ElementRow ref={ref} {...props} />;
  }
);

SearchRow.displayName = "SearchRow";
TitleRow.displayName = "TitleRow";
ElementRow.displayName = "ElementRow";
SelectRow.displayName = "SelectRow";
