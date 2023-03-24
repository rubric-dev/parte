import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4H1C0.45 4 0 4.45 0 5V15C0 15.55 0.45 16 1 16H2C2.55 16 3 15.55 3 15V5C3 4.45 2.55 4 2 4ZM2 0H1C0.45 0 0 0.45 0 1V2C0 2.55 0.45 3 1 3H2C2.55 3 3 2.55 3 2V1C3 0.45 2.55 0 2 0ZM13.71 4.29C13.53 4.11 13.28 4 13 4C12.72 4 12.47 4.11 12.29 4.29L10.29 6.29C10.11 6.47 10 6.72 10 7C10 7.55 10.45 8 11 8C11.28 8 11.53 7.89 11.71 7.71L12 7.41V9C12 10.66 10.66 12 9 12H7.41L7.7 11.71C7.89 11.53 8 11.28 8 11C8 10.45 7.55 10 7 10C6.72 10 6.47 10.11 6.29 10.29L4.29 12.29C4.11 12.47 4 12.72 4 13C4 13.28 4.11 13.53 4.29 13.71L6.29 15.71C6.47 15.89 6.72 16 7 16C7.55 16 8 15.55 8 15C8 14.72 7.89 14.47 7.71 14.29L7.41 14H9C11.76 14 14 11.76 14 9V7.41L14.29 7.7C14.47 7.89 14.72 8 15 8C15.55 8 16 7.55 16 7C16 6.72 15.89 6.47 15.71 6.29L13.71 4.29ZM15 0H5C4.45 0 4 0.45 4 1V2C4 2.55 4.45 3 5 3H15C15.55 3 16 2.55 16 2V1C16 0.45 15.55 0 15 0Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TablePivotTableIcon = convertIcon(Icon, "table-pivot-table");
export default TablePivotTableIcon;
