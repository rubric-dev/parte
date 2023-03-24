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
        d="M12 10C12 10.55 12.45 11 13 11C13.28 11 13.53 10.89 13.71 10.71L15.71 8.71C15.89 8.53 16 8.28 16 8C16 7.72 15.89 7.47 15.71 7.29L13.71 5.29C13.53 5.11 13.28 5 13 5C12.45 5 12 5.45 12 6C12 6.28 12.11 6.53 12.29 6.71L12.59 7H9V2H12V3.71C12.31 3.58 12.64 3.5 13 3.5C13.36 3.5 13.69 3.58 14 3.71V1C14 0.45 13.55 0 13 0H3C2.45 0 2 0.45 2 1V3.71C2.31 3.58 2.64 3.5 3 3.5C3.36 3.5 3.69 3.58 4 3.71V2H7V7H3.41L3.7 6.71C3.89 6.53 4 6.28 4 6C4 5.45 3.55 5 3 5C2.72 5 2.47 5.11 2.29 5.29L0.29 7.29C0.11 7.47 0 7.72 0 8C0 8.28 0.11 8.53 0.29 8.71L2.29 10.71C2.47 10.89 2.72 11 3 11C3.55 11 4 10.55 4 10C4 9.72 3.89 9.47 3.71 9.29L3.41 9H7V14H4V12.29C3.69 12.42 3.36 12.5 3 12.5C2.64 12.5 2.31 12.42 2 12.29V15C2 15.55 2.45 16 3 16H13C13.55 16 14 15.55 14 15V12.29C13.69 12.42 13.36 12.5 13 12.5C12.64 12.5 12.31 12.42 12 12.29V14H9V9H12.59L12.3 9.29C12.11 9.47 12 9.72 12 10Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableSplitColumnsIcon = convertIcon(Icon, "table-split-columns");
export default TableSplitColumnsIcon;
