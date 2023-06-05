import {
  SelectRowProps,
  SelectRowSearch,
  SelectRowTitle,
  SelectRowElement,
} from "./SelectRow.types";
import * as Styled from "./SelectRow.styled";
import { forwardRef, useEffect, useRef } from "react";
import { ActionSearchIcon } from "../../../../parte-icons/src";

const SearchRow = forwardRef<HTMLDivElement, SelectRowSearch>((props, ref) => {
  const { inputValue, onChange } = props;
  return (
    <Styled.SelectRow
      variant="search"
      ref={ref}
      role="selectItemSearch"
      disabled={props.disabled}
    >
      <ActionSearchIcon size={12} color="N600" />
      <Styled.SearchInput
        variant="search"
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
    <Styled.SelectRow variant="title" ref={ref} role="selectItemTitle">
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
    },
    ref
  ) => {
    const rowRef = useRef<HTMLDivElement>(null);

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
        variant="element"
        tabIndex={disabled ? -1 : 0}
        ref={rowRef}
        role="selectItem"
        disabled={disabled}
        selected={selected}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
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
