import {
  ComponentType,
  KeyboardEventHandler,
  useMemo,
  useRef,
  useState,
} from "react";
import StaticSelect, {
  ActionMeta,
  ClearIndicatorProps,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  IndicatorsContainerProps,
  MenuListProps,
  MenuProps,
  MultiValue,
  MultiValueRemoveProps,
  OptionProps,
  SelectInstance,
  SingleValue,
  StylesConfig,
  components,
} from "react-select";
import {
  AsyncPaginate,
  useComponents,
  wrapMenuList,
} from "react-select-async-paginate";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import {
  ActionDeleteIcon,
  ActionSearchIcon,
  ActionSmallCrossIcon,
  InterfaceCaretDownIcon,
} from "../../../parte-icons/src";
import { Paragraph } from "../@foundations/Typography";
import { Option } from "../Dropdown";
import { InputWrapper } from "../InputWrapper";
import { Box } from "../Layout";
import { Spinner } from "../Spinner";
import { SelectProps } from "./Select.types";
import useSelectStyle from "./useSelectStyle";

export const Control = ({
  children,
  showSearchIcon,
  ...props
}: ControlProps<Option<unknown>, boolean> & { showSearchIcon: boolean }) => {
  return (
    <components.Control {...props}>
      {showSearchIcon && (
        <Box marginTop={2} marginRight={8} display="flex" alignItems="center">
          <ActionSearchIcon size={12} />
        </Box>
      )}
      {children}
    </components.Control>
  );
};

const MultiValueRemove = ({
  ...props
}: MultiValueRemoveProps<Option<unknown>, boolean>) => {
  return (
    <components.MultiValueRemove {...props}>
      <ActionSmallCrossIcon size={12} />
    </components.MultiValueRemove>
  );
};

const LoadingMessage = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="120px"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size={12} />
    </Box>
  );
};

export const IndicatorsContainer = ({
  children,
  ...props
}: IndicatorsContainerProps<Option<unknown>, boolean>) => {
  return (
    <components.IndicatorsContainer {...props}>
      {children}
    </components.IndicatorsContainer>
  );
};

export const ClearIndicator = ({
  children,
  ...props
}: ClearIndicatorProps<Option<unknown>, boolean>) => {
  return (
    <components.ClearIndicator {...props}>
      <ActionDeleteIcon size={12} />
    </components.ClearIndicator>
  );
};

export const DropdownIndicator = ({
  children,
  ...props
}: DropdownIndicatorProps<Option<unknown>, boolean>) => {
  return (
    <components.DropdownIndicator {...props}>
      <InterfaceCaretDownIcon size={12} />
    </components.DropdownIndicator>
  );
};

export const OptionComponent = ({
  children,
  ...props
}: OptionProps<Option<unknown>, boolean>) => {
  const { label, icon } = props.data;
  return (
    <components.Option {...props}>
      {icon} {label}
    </components.Option>
  );
};

export const customMenuList = (
  props: MenuListProps<Option<unknown>, boolean>
) => {
  const { isLoading } = props.selectProps;
  return (
    <components.MenuList {...props}>
      {props.children}
      {!!props.options.length && isLoading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={32}
        >
          <Spinner size={12} />
        </Box>
      )}
    </components.MenuList>
  );
};

export const Menu = ({
  children,
  ...props
}: MenuProps<Option<unknown>, boolean>) => {
  return <components.Menu {...props}>{children}</components.Menu>;
};

export const NoOptionsMessage = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="120px"
      alignItems="center"
      justifyContent="center"
    >
      <Paragraph size={100} color="N800">
        No options found
      </Paragraph>
    </Box>
  );
};

export function Select<T>(props: SelectProps<T>) {
  const {
    placeholder = "Select Event",
    isDisabled = false,
    isError = false,
    isMulti = false,
    errorText,
    value,
    onChange,
    type,
    label,
    description,
    required,
    menuIsOpen,
    direction,
    width,
    labelWidth,
    showSearchIcon = false,
    styles: customStyles,
    components: customComponents,
  } = props;

  const styles = useSelectStyle({ isError, customStyles }) as StylesConfig<
    Option<T>,
    boolean
  >;

  /** isMulti가 true일때만 관리하면되는값 */
  const [showMenuList, setShowMenuList] = useState(false);

  const selectRef =
    useRef<SelectInstance<Option<T>, boolean, GroupBase<Option<T>>>>(null);

  const defaultComponents: Partial<
    SelectComponents<Option<T>, boolean, GroupBase<Option<T>>>
  > = useMemo(
    () => ({
      Menu: Menu as ComponentType<
        MenuProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      Control: ((props: ControlProps<Option<unknown>, boolean>) =>
        Control({ ...props, showSearchIcon })) as ComponentType<
        ControlProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      IndicatorsContainer: IndicatorsContainer as ComponentType<
        IndicatorsContainerProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      MultiValueRemove: MultiValueRemove as ComponentType<
        MultiValueRemoveProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      DropdownIndicator: DropdownIndicator as ComponentType<
        DropdownIndicatorProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      ClearIndicator: ClearIndicator as ComponentType<
        ClearIndicatorProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      Option: OptionComponent as ComponentType<
        OptionProps<Option<T>, boolean, GroupBase<Option<T>>>
      >,
      LoadingMessage,
      NoOptionsMessage,
      ...customComponents,
    }),
    [customComponents]
  );

  const asyncComponents = useComponents(defaultComponents);
  const MenuList = wrapMenuList(customMenuList) as ComponentType<
    MenuListProps<Option<T>, boolean, GroupBase<Option<T>>>
  >;

  const onChangeSelect = (
    newValue: MultiValue<Option<T>> | SingleValue<Option<T>>,
    actionMeta: ActionMeta<Option<T>>
  ) => {
    if (!newValue) {
      return;
    }
    onChange?.(newValue, actionMeta);
  };

  const onFocus = () => isMulti && setShowMenuList(true);
  const onBlur = () => isMulti && setShowMenuList(false);
  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") {
      selectRef.current?.blur();
    }
  };

  const SelectComponent =
    type === "static" ? (
      <StaticSelect
        components={defaultComponents}
        {...props}
        ref={selectRef}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        isDisabled={isDisabled}
        onChange={onChangeSelect}
        value={value}
        hideSelectedOptions={isMulti}
        styles={styles}
        placeholder={placeholder}
        isSearchable
        menuIsOpen={isMulti ? showMenuList ?? menuIsOpen : menuIsOpen}
        closeMenuOnSelect={!isMulti}
      />
    ) : (
      <AsyncPaginate
        components={{
          ...asyncComponents,
          MenuList,
        }}
        {...props}
        selectRef={selectRef}
        isDisabled={isDisabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onChange={onChangeSelect}
        value={value}
        hideSelectedOptions={isMulti}
        styles={styles}
        placeholder={placeholder}
        isSearchable
        menuIsOpen={isMulti ? showMenuList ?? menuIsOpen : menuIsOpen}
        closeMenuOnSelect={!isMulti}
      />
    );

  return (
    <InputWrapper
      label={label}
      description={description}
      required={required}
      width={width}
      errorText={errorText}
      direction={direction}
      labelWidth={labelWidth}
    >
      {SelectComponent}
    </InputWrapper>
  );
}
