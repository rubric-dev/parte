import { useTheme } from "styled-components";
import { GroupBase, StylesConfig } from "react-select";

const useSelectStyle = <
  T,
  K extends boolean,
  G extends GroupBase<T> = GroupBase<T>,
>({
  isError,
  customStyles,
  width,
  height,
}: {
  isError: boolean;
  customStyles?: StylesConfig<T, K, G>;
  width?: string | number;
  height?: string | number;
}): StylesConfig<T, K, G> => {
  const theme = useTheme();

  return {
    container: (css, props) => {
      return {
        ...css,

        width: width
          ? typeof width === "string"
            ? width
            : `${width}px`
          : undefined,
        height: height,
        backgroundColor: theme.colors.N0,
        svg: {
          color: props.isDisabled ? theme.colors.N500 : theme.colors.N600,
        },
        ...customStyles?.container?.(css, props),
      };
    },
    control: (css, props) => {
      return {
        ...css,
        cursor: "pointer",
        minHeight: "unset",
        height: height,
        borderRadius: "4px",
        backgroundColor: theme.colors.N0,
        // 원래는 상하 패딩은 8인데, border는 control 컴포넌트에서 관리하기때문에, boxSizing이 적용안됨
        padding: "7px 10px 7px 12px",
        display: "flex",
        alignItems: "center",
        svg: {
          color: theme.colors.N600,
        },
        "&:hover": {
          borderColor: theme.colors.N600,
          "& div[id$=placeholder]": {
            color: `${theme.colors.N700} !important`,
          },
        },
        ...(props.isFocused
          ? {
              borderColor: `${theme.colorBorderSelectFocused} !important`,
              // TODO: outline
              boxShadow: `0 0 0 2px ${theme.colorOutlineSelectFocused}`,
            }
          : {
              boxShadow: "none",
              borderColor: theme.colors.N400,
              "&:hover": {
                borderColor: theme.colors.N600,
                "& div[id$=placeholder]": {
                  color: `${theme.colors.N700} !important`,
                },
              },
            }),
        ...(isError
          ? {
              boxShadow: "none",
              borderColor: `${theme.colors.R400} !important`,
            }
          : {}),
        ...(props.isDisabled
          ? {
              borderColor: theme.colors.N300,
              backgroundColor: `${theme.colors.N100} !important`,
              svg: {
                color: theme.colors.N500,
              },
            }
          : {}),
        ...customStyles?.control?.(css, props),
      };
    },
    groupHeading: (css, props) => ({
      ...css,
      height: "32px",
      color: theme.colors.N600,
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "16px",
      display: "flex",
      alignItems: "center",
      margin: 0,
      boxSizing: "border-box",
      borderBottom: `1px solid ${theme.colors.N300}`,
      ...customStyles?.groupHeading?.(css, props),
    }),
    group: (css, props) => ({
      ...css,
      padding: "0",
      "&:not(:first-of-type)": {
        borderTop: `1px solid ${theme.colors.N300}`,
      },
      ...customStyles?.group?.(css, props),
    }),
    multiValue: (css, props) => ({
      ...css,
      borderRadius: "4px",
      margin: 0,
      padding: "0 4px",
      display: "flex",
      columnGap: "2px",
      cursor: "pointer",
      ...(isError
        ? {
            backgroundColor: theme.colors.R100,
            "&:hover": {
              div: {
                color: theme.colors.R400,
              },
              "& svg": {
                color: `${theme.colors.R400} !important`,
              },
            },
          }
        : {
            backgroundColor: theme.colors.N200,
            "&:hover": {
              div: {
                color: theme.colors.N600,
              },
              "& svg": {
                color: `${theme.colors.N600} !important`,
              },
            },
          }),
      ...(props.isDisabled ? { backgroundColor: theme.colors.N100 } : {}),
      ...customStyles?.multiValue?.(css, props),
    }),
    multiValueLabel: (css, props) => ({
      ...css,
      padding: "0px !important",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      ...(isError
        ? {
            color: theme.colors.R600,
          }
        : {
            color: theme.colors.N800,
          }),
      ...(props.isDisabled
        ? {
            color: theme.colors.N500,
          }
        : {}),
      ...customStyles?.multiValueLabel?.(css, props),
    }),
    multiValueRemove: (css, props) => ({
      ...css,
      padding: "0px",
      "&:hover": {
        backgroundColor: "transparent",
      },
      ...(isError
        ? {
            svg: { color: `${theme.colors.R600}  !important` },
          }
        : {
            svg: {
              color: `${theme.colors.N800} !important`,
            },
          }),
      ...(props.isDisabled
        ? {
            svg: {
              color: `${theme.colors.N500}  !important`,
            },
          }
        : {}),
      ...customStyles?.multiValueRemove?.(css, props),
    }),
    menu: (css, props) => {
      return {
        ...css,
        marginTop: "4px",
        borderRadius: "4px",
        border: `1px solid ${theme.colors.N300}`,
        overflow: "hidden",
        boxShadow:
          "0px 5px 8px -4px rgba(67, 90, 111, 0.47), 0px 0px 1px rgba(16, 24, 64, 0.3)",
        zIndex: 10,
        ...customStyles?.menu?.(css, props),
      };
    },
    menuList: (css, props) => {
      return {
        ...css,
        padding: "0",
        ...customStyles?.menuList?.(css, props),
      };
    },
    valueContainer: (css, props) => {
      return {
        ...css,
        padding: "0",
        ...(props.isMulti
          ? {
              gap: "8px",
            }
          : {}),
        ...customStyles?.valueContainer?.(css, props),
      };
    },
    singleValue: (css, props) => ({
      ...css,
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      color: theme.colors.N800,
      ...(props.isDisabled ? { color: theme.colors.N600 } : {}),
      ...customStyles?.singleValue?.(css, props),
    }),
    placeholder: (css, props) => ({
      ...css,
      padding: 0,
      margin: 0,
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      color: theme.colors.N600,
      ...(props.isFocused ? { color: theme.colors.N700 } : {}),
      ...(props.isDisabled ? { color: theme.colors.N600 } : {}),
      ...customStyles?.placeholder?.(css, props),
    }),
    input: (css, props) => ({
      ...css,
      padding: 0,
      margin: 0,
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "16px",
      color: theme.colors.N800,
      ...(props.isDisabled ? { color: theme.colors.N600 } : {}),
      ...customStyles?.input?.(css, props),
    }),
    option: (css, props) => {
      return {
        ...css,
        padding: "0 12px",
        minHeight: "32px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        columnGap: "8px",
        color: theme.colors.N800,
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "16px",
        position: "relative",
        cursor: "pointer",
        "&:not(:last-of-type)": {
          borderBottom: `1px solid ${theme.colors.N300}`,
        },
        ":hover": { backgroundColor: theme.colors.N50 },
        "&:active": { background: theme.colors.N50 },
        ...(props.isFocused
          ? { backgroundColor: theme.colors.N50 }
          : {
              backgroundColor: theme.colors.N0,
              ":hover": { backgroundColor: theme.colors.N50 },
            }),
        ...(props.isSelected
          ? {
              backgroundColor: `${theme.colorBackgroundSelectOptionSelected} !important`,
              color: theme.colorTextSelectOptionSelected,
              "::before": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "0px",
                height: "100%",
                borderRadius: "0px 2px 2px 0px",
                backgroundColor: theme.colorTextSelectOptionSelected,
                width: "2px",
              },
            }
          : {}),
        ...customStyles?.option?.(css, props),

        // ==== icon ====
        svg: props.isSelected
          ? {
              color: theme.colorTextSelectOptionSelected,
            }
          : {
              color: theme.colors.N700,
            },
        // ==== icon ====
      };
    },
    indicatorsContainer: (css, props) => ({
      ...css,
      padding: "0px",
      paddingLeft: "12px",
      paddingTop: "2px",
      columnGap: "8px",
      alignSelf: "center",
      svg: {
        color: theme.colors.N600,
      },
      ...(props.isDisabled
        ? {
            svg: {
              color: theme.colors.N600,
            },
          }
        : {}),
      ...customStyles?.indicatorsContainer?.(css, props),
    }),
    loadingIndicator: (css) => ({ ...css, display: "none" }),
    indicatorSeparator: (css) => ({ ...css, display: "none" }),
    clearIndicator: (css, props) => ({
      ...css,
      padding: 0,
      cursor: "pointer",
      svg: {
        color: theme.colors.N600,
      },
      "&:hover": {
        svg: {
          color: theme.colors.N700,
        },
      },
      ...customStyles?.clearIndicator?.(css, props),
    }),
    dropdownIndicator: (css, props) => ({
      ...css,
      padding: 0,
      svg: {
        color: theme.colors.N600,
      },
      ...(props.isDisabled ? { color: theme.colors.N600 } : {}),
      ...customStyles?.dropdownIndicator?.(css, props),
    }),
    menuPortal: (css, props) => ({
      ...css,
      ...customStyles?.menuPortal?.(css, props),
    }),
  };
};

export default useSelectStyle;
