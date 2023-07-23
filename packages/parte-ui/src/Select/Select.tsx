import {
  ComponentType,
  ForwardedRef,
  ReactElement,
  forwardRef,
  useMemo,
} from "react";
import StaticSelect, {
  ClearIndicatorProps,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  IndicatorsContainerProps,
  MenuListProps,
  MenuProps,
  MultiValueRemoveProps,
  NoticeProps,
  OptionProps,
  SelectInstance,
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
import { AsyncSelectProps, SelectProps } from "./Select.types";
import useSelectStyle from "./useSelectStyle";

export const Control = <T,>({
  children,
  showSearchIcon,
  ...props
}: ControlProps<Option<T>, boolean> & { showSearchIcon: boolean }) => {
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

const MultiValueRemove = <T,>({
  ...props
}: MultiValueRemoveProps<Option<T>, boolean>) => {
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

export const IndicatorsContainer = <T,>({
  children,
  ...props
}: IndicatorsContainerProps<Option<T>, boolean>) => {
  return (
    <components.IndicatorsContainer {...props}>
      {children}
    </components.IndicatorsContainer>
  );
};

export const ClearIndicator = <T,>({
  children,
  ...props
}: ClearIndicatorProps<Option<T>, boolean>) => {
  return (
    <components.ClearIndicator {...props}>
      <ActionDeleteIcon size={12} />
    </components.ClearIndicator>
  );
};

export const DropdownIndicator = <T,>({
  children,
  ...props
}: DropdownIndicatorProps<Option<T>, boolean>) => {
  return (
    <components.DropdownIndicator {...props}>
      <InterfaceCaretDownIcon size={12} />
    </components.DropdownIndicator>
  );
};

export const OptionComponent = <T,>({
  children,
  ...props
}: OptionProps<Option<T>, boolean>) => {
  const { label, icon } = props.data;
  return (
    <components.Option {...props}>
      {icon} {label}
    </components.Option>
  );
};

export const customMenuList = <T,>(
  props: MenuListProps<Option<T>, boolean>
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

export const Menu = <T,>({
  children,
  ...props
}: MenuProps<Option<T>, boolean>) => {
  return <components.Menu {...props}>{children}</components.Menu>;
};

export const NoOptionsMessage = <T,>({
  children,
  ...props
}: NoticeProps<Option<T>, boolean, GroupBase<Option<T>>>) => {
  return (
    <components.NoOptionsMessage {...props}>
      <Box
        display="flex"
        width="100%"
        height="120px"
        alignItems="center"
        justifyContent="center"
      >
        <Paragraph size={100} color="N800">
          {children}
        </Paragraph>
      </Box>
    </components.NoOptionsMessage>
  );
};

const SelectComponent = <T,>(
  props: SelectProps<T>,
  ref: ForwardedRef<
    SelectInstance<Option<T>, boolean, GroupBase<Option<T>>>
  > | null
) => {
  const {
    label,
    description,
    required,
    width,
    minWidth,
    maxWidth,
    errorText,
    direction,
    labelWidth,
    id,

    placeholder = "선택",
    isDisabled = false,
    isError = false,
    isMulti = false,
    showSearchIcon = false,
    styles: customStyles,
    components: customComponents,
    ...selectProps
  } = props;

  const styles = useSelectStyle({ isError, customStyles }) as StylesConfig<
    Option<T>,
    boolean
  >;

  const defaultComponents: Partial<
    SelectComponents<Option<T>, boolean, GroupBase<Option<T>>>
  > = useMemo(
    () => ({
      Menu,
      Control: (props) => (
        <Control {...props} showSearchIcon={showSearchIcon} />
      ),
      IndicatorsContainer,
      MultiValueRemove,
      DropdownIndicator,
      ClearIndicator,
      Option: OptionComponent,
      LoadingMessage,
      NoOptionsMessage,
      ...customComponents,
    }),
    [customComponents, showSearchIcon]
  );

  return (
    <InputWrapper
      label={label}
      description={description}
      required={required}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      errorText={errorText}
      direction={direction}
      labelWidth={labelWidth}
      disabled={isDisabled}
      id={id}
    >
      <StaticSelect
        closeMenuOnSelect={!isMulti}
        hideSelectedOptions={isMulti}
        isSearchable
        {...selectProps}
        isMulti={isMulti}
        components={defaultComponents}
        id={id}
        ref={ref}
        isDisabled={isDisabled}
        styles={styles}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

const AsyncSelectComponent = <T,>(
  props: AsyncSelectProps<T>,
  ref: ForwardedRef<
    SelectInstance<Option<T>, boolean, GroupBase<Option<T>>>
  > | null
) => {
  const {
    label,
    description,
    required,
    width,
    minWidth,
    maxWidth,
    errorText,
    direction,
    labelWidth,
    id,

    placeholder = "선택",
    isDisabled = false,
    isError = false,
    isMulti = false,
    showSearchIcon = false,
    styles: customStyles,
    components: customComponents,
    ...selectProps
  } = props;

  const styles = useSelectStyle({ isError, customStyles }) as StylesConfig<
    Option<T>,
    boolean
  >;

  const defaultComponents: Partial<
    SelectComponents<Option<T>, boolean, GroupBase<Option<T>>>
  > = useMemo(
    () => ({
      Menu,
      Control: (props) => (
        <Control {...props} showSearchIcon={showSearchIcon} />
      ),
      IndicatorsContainer,
      MultiValueRemove,
      DropdownIndicator,
      ClearIndicator,
      Option: OptionComponent,
      LoadingMessage,
      NoOptionsMessage,
      ...customComponents,
    }),
    [customComponents, showSearchIcon]
  );

  const asyncComponents = useComponents(defaultComponents);
  const MenuList = wrapMenuList(customMenuList) as ComponentType<
    MenuListProps<Option<T>, boolean, GroupBase<Option<T>>>
  >;
  return (
    <InputWrapper
      label={label}
      description={description}
      required={required}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      errorText={errorText}
      direction={direction}
      labelWidth={labelWidth}
      disabled={isDisabled}
      id={id}
    >
      <AsyncPaginate
        closeMenuOnSelect={!isMulti}
        hideSelectedOptions={isMulti}
        isSearchable
        {...(selectProps as AsyncSelectProps<T>)}
        isMulti={isMulti}
        components={{
          ...asyncComponents,
          MenuList,
        }}
        id={id}
        selectRef={ref}
        isDisabled={isDisabled}
        styles={styles}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export const Select = forwardRef(SelectComponent) as <T>(
  props: SelectProps<T> & {
    ref?: React.RefObject<
      SelectInstance<Option<T>, boolean, GroupBase<Option<T>>>
    > | null;
  }
) => ReactElement;

export const AsyncSelect = forwardRef(AsyncSelectComponent) as <T>(
  props: AsyncSelectProps<T> & {
    ref?: React.RefObject<
      SelectInstance<Option<T>, boolean, GroupBase<Option<T>>>
    > | null;
  }
) => ReactElement;
