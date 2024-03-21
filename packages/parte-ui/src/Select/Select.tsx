import {
  ComponentType,
  ForwardedRef,
  ReactElement,
  ReactNode,
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
  components,
} from "react-select";
import {
  AsyncPaginate,
  useComponents,
  wrapMenuList,
} from "react-select-async-paginate";
import {
  ActionDeleteIcon,
  ActionSearchIcon,
  ActionSmallCrossIcon,
  CaretDownIcon,
} from "../../../parte-icons/src";
import { Paragraph } from "../@foundations/Typography";
import { Option } from "../Dropdown";
import { Box } from "../Layout";
import { Spinner } from "../Spinner";
import {
  AsyncSelectProps,
  SelectAdditional,
  SelectProps,
} from "./Select.types";
import useSelectStyle from "./useSelectStyle";
export const Control = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>({
  children,
  showSearchIcon,
  ...props
}: ControlProps<T, K, G> & { showSearchIcon: boolean }) => {
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

const MultiValueRemove = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>({
  ...props
}: MultiValueRemoveProps<T, K, G>) => {
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

export const IndicatorsContainer = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>({
  children,
  ...props
}: IndicatorsContainerProps<T, K, G>) => {
  return (
    <components.IndicatorsContainer {...props}>
      {children}
    </components.IndicatorsContainer>
  );
};

export const ClearIndicator = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>({
  children,
  ...props
}: ClearIndicatorProps<T, K, G>) => {
  return (
    <components.ClearIndicator {...props}>
      <ActionDeleteIcon size={12} />
    </components.ClearIndicator>
  );
};

export const DropdownIndicator = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>({
  children,
  ...props
}: DropdownIndicatorProps<T, K, G>) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDownIcon size={12} />
    </components.DropdownIndicator>
  );
};

export const OptionComponent = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>({
  children,
  ...props
}: OptionProps<T, K, G>) => {
  let icon: ReactNode | undefined;
  if ("icon" in (props.data as unknown as object))
    icon = (props.data as unknown as Option<T>).icon as ReactNode;
  const label = (props.data as unknown as Option<T>).label;

  if (icon) {
    return (
      <components.Option {...props}>
        {icon} {label}
      </components.Option>
    );
  }

  return <components.Option {...props}>{label}</components.Option>;
};

export const customMenuList = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>(
  props: MenuListProps<T, K, G>
) => {
  const { isLoading } = props.selectProps;
  return (
    <components.MenuList {...props}>
      {props.children}
      {!!props.options.length && isLoading && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Spinner size={12} />
        </Box>
      )}
    </components.MenuList>
  );
};

export const Menu = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>({
  children,
  ...props
}: MenuProps<T, K, G>) => {
  return <components.Menu {...props}>{children}</components.Menu>;
};

export const NoOptionsMessage = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>({
  children,
  ...props
}: NoticeProps<T, K, G>) => {
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

const SelectComponent = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>(
  props: SelectProps<T, K, G>,
  ref: ForwardedRef<SelectInstance<T, K, G>>
) => {
  const {
    placeholder = "선택",
    isDisabled = false,
    isError = false,
    isMulti,
    showSearchIcon = false,
    styles: customStyles,
    components: customComponents,
    width,
    height = 32,
    ...selectProps
  } = props;

  const styles = useSelectStyle<T, K, G>({
    isError,
    customStyles,
    width,
    height,
  });

  const defaultComponents = useMemo(
    () => ({
      Menu,
      Control: (props: ControlProps<T, K, G>) => (
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
    <StaticSelect<T, K, G>
      ref={ref as any}
      closeMenuOnSelect={!isMulti}
      hideSelectedOptions={isMulti}
      isSearchable
      {...selectProps}
      isMulti={isMulti}
      components={defaultComponents}
      isDisabled={isDisabled}
      styles={styles}
      placeholder={placeholder}
    />
  );
};

const AsyncSelectComponent = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>(
  props: AsyncSelectProps<T, K, G>,
  ref: ForwardedRef<
    SelectInstance<Option<T>, boolean, GroupBase<Option<T>>>
  > | null
) => {
  const {
    placeholder = "선택",
    isDisabled = false,
    isError = false,
    isMulti,
    showSearchIcon = false,
    styles: customStyles,
    components: customComponents,
    width,
    height,
    ...selectProps
  } = props;

  const styles = useSelectStyle({
    isError,
    customStyles,
    width,
    height,
  });

  const defaultComponents = useMemo(
    () => ({
      Menu,
      Control: (props: ControlProps<T, K, G>) => (
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
    MenuListProps<T, K, G>
  >;
  return (
    <AsyncPaginate
      selectRef={ref as any}
      closeMenuOnSelect={!isMulti}
      hideSelectedOptions={isMulti}
      isSearchable
      {...selectProps}
      isMulti={isMulti}
      components={{
        ...asyncComponents,
        MenuList,
      }}
      isDisabled={isDisabled}
      styles={styles}
      placeholder={placeholder}
    />
  );
};

export const Select = forwardRef(SelectComponent) as <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>
>(
  props: SelectProps<T, K, G> & {
    ref?: React.RefObject<SelectInstance<T, K, G>> | null;
  }
) => ReactElement;

export const AsyncSelect = forwardRef(AsyncSelectComponent) as <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>,
  Additional extends SelectAdditional = SelectAdditional
>(
  props: AsyncSelectProps<T, K, G, Additional> & {
    ref?: React.RefObject<SelectInstance<T, K, G>> | null;
  }
) => ReactElement;
