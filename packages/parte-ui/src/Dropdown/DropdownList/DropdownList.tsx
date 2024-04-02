import { DropdownListProps, GroupOption, Option } from "./DropdownList.types";
import * as Styled from "./DropdownList.styled";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { SelectRow } from "../SelectRow";
import shallowEqual from "shallowequal";
import DropdownContext from "../DropdownContext";
import { ARROW_VERTICAL_KEYS } from "../../constant";

const isGroupOptions = <T,>(
  options: Option<T>[] | GroupOption<T>[]
): options is GroupOption<T>[] => {
  if (options.length === 0) {
    return false;
  }
  if ("groupName" in options[0]) {
    return true;
  }
  return false;
};

const compareValue = (value1: unknown, value2: unknown) => {
  if (typeof value1 === "object" && typeof value2 === "object") {
    if (value1 === null) return value1 === value2;
    return shallowEqual(value1, value2);
  }
  return value1 === value2;
};

export const DropdownList = <T,>({
  options,
  value,
  onSelect,
  onChange,
  isSearchable,
  noOptionsText,
  isMulti,
  closeOnSelect,
  title,
  width = 240,
  autoFocus = true,
}: DropdownListProps<T>) => {
  const [inputValue, setInputValue] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItems = useRef<HTMLDivElement[]>([]);

  const { onClose } = useContext(DropdownContext);

  const onSelectValue = (option: Option<T>) => {
    onSelect?.(option);
    if (isMulti) {
      if (!value) {
        onChange?.([option]);
      } else if (!("length" in value)) {
        // eslint-disable-next-line no-console
        console.warn(
          "value props should be array type if you use isMulti option."
        );
      } else {
        const newValue = value.find(({ value: selectedValue }) =>
          compareValue(selectedValue, option.value)
        )
          ? value.filter(
              ({ value: selectedValue }) =>
                !compareValue(selectedValue, option.value)
            )
          : [...value, option];
        onChange?.(newValue);
      }
    } else {
      onChange?.(option);
    }
    const isCloseOnSelect = closeOnSelect ?? !isMulti;
    if (isCloseOnSelect) onClose?.();
  };

  const handleKeyboard =
    (option: Option<T>) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter") {
        onSelectValue(option);
      }
    };

  const isSelected = (
    targetOpt: Option<T>,
    selectedOpt?: Option<T> | Option<T>[]
  ) => {
    if (!selectedOpt) return false;
    if ("length" in selectedOpt) {
      return selectedOpt.some(({ value }) =>
        compareValue(targetOpt.value, value)
      );
    }
    return compareValue(targetOpt.value, selectedOpt.value);
  };

  const filteredOptions = useMemo(() => {
    if (isGroupOptions(options)) {
      return options.map((groupOption) => ({
        ...groupOption,
        options: groupOption.options.filter(({ label }) =>
          label.includes(inputValue)
        ),
      }));
    }
    return options.filter(({ label }) => label.includes(inputValue));
  }, [inputValue, options]);

  useEffect(() => {
    const root = document.getElementById("root");
    const currentMenuRef = menuRef.current;
    if (!currentMenuRef || !root) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (ARROW_VERTICAL_KEYS.includes(e.key)) e.preventDefault();
      if (e.isComposing) return;

      const rows = currentMenuRef.querySelectorAll(
        '[role="selectItem"]:not([disabled])'
      );
      menuItems.current = [];
      rows.forEach((row) => menuItems.current.push(row as HTMLDivElement));

      const target = e.target as HTMLDivElement;
      if (target === currentMenuRef) {
        menuItems.current[0]?.focus();
        return;
      }
      const indexOfItem = menuItems.current.indexOf(target);
      const { length } = menuItems.current;
      let nextIndex = indexOfItem;
      switch (e.key) {
        case "ArrowDown":
          nextIndex = indexOfItem + 1 >= length ? 0 : indexOfItem + 1;
          break;
        case "ArrowUp":
          nextIndex = indexOfItem - 1 < 0 ? length - 1 : indexOfItem - 1;
          break;
        default:
          break;
      }
      menuItems.current[nextIndex]?.focus();
    };
    root.addEventListener("keydown", onKeyDown);
    return () => {
      root.removeEventListener("keydown", onKeyDown);
    };
  }, [filteredOptions]);

  const noOption = useMemo(() => {
    if (filteredOptions.length === 0) return true;
    if (isGroupOptions(filteredOptions)) {
      return filteredOptions.every(({ options }) => options.length === 0);
    }
    return false;
  }, [filteredOptions]);

  return (
    <Styled.List
      ref={menuRef}
      display="flex"
      flexDirection="column"
      $isFirst={!isSearchable && !title}
      width={width}
    >
      {isSearchable && (
        <SelectRow
          variant="search"
          inputValue={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      )}
      {title && (
        <SelectRow variant="title" isSearchable={isSearchable}>
          {title}
        </SelectRow>
      )}
      {noOption && (
        <Styled.NoOption
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {noOptionsText ?? "No Options found"}
        </Styled.NoOption>
      )}
      {isGroupOptions(filteredOptions)
        ? filteredOptions.map(({ groupName, options: groupOptions }, index) => (
            <React.Fragment key={index}>
              {!!groupOptions.length && (
                <SelectRow variant="title">{groupName}</SelectRow>
              )}
              {groupOptions
                .filter(({ label }) => label.includes(inputValue))
                .map((groupOption) => (
                  <SelectRow
                    isMulti={isMulti}
                    isSearchable={isSearchable}
                    key={groupOption.label}
                    onClick={() => onSelectValue(groupOption)}
                    selected={isSelected(groupOption, value)}
                    disabled={groupOption.disabled}
                    onKeyDown={handleKeyboard(groupOption)}
                    icon={groupOption.icon}
                    shouldFocusWhenSelected={!isMulti}
                  >
                    {groupOption.label}
                  </SelectRow>
                ))}
            </React.Fragment>
          ))
        : filteredOptions
            .filter(({ label }) => label.includes(inputValue))
            .map((option, index) => (
              <SelectRow
                isMulti={isMulti}
                isSearchable={isSearchable}
                key={index}
                onClick={() => onSelectValue(option)}
                selected={isSelected(option, value)}
                disabled={option.disabled}
                onKeyDown={handleKeyboard(option)}
                icon={option.icon}
                shouldFocusWhenSelected={!isMulti && autoFocus}
              >
                {option.label}
              </SelectRow>
            ))}
    </Styled.List>
  );
};
