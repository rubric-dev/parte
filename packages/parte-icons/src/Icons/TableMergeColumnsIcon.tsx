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
        d="M5.71 5.29C5.53 5.11 5.28 5 5 5C4.45 5 4 5.45 4 6C4 6.28 4.11 6.53 4.29 6.71L4.59 7H2V2H5V3.51C5.52 3.57 5.99 3.8 6.34 4.16L7 4.82V1C7 0.45 6.55 0 6 0H1C0.45 0 0 0.45 0 1V15C0 15.55 0.45 16 1 16H6C6.55 16 7 15.55 7 15V11.18L6.34 11.84C5.99 12.19 5.52 12.43 5 12.49V14H2V9H4.59L4.29 9.29C4.11 9.47 4 9.72 4 10C4 10.55 4.45 11 5 11C5.28 11 5.53 10.89 5.71 10.71L7.71 8.71C7.89 8.53 8 8.28 8 8C8 7.72 7.89 7.47 7.71 7.29L5.71 5.29ZM15 0H10C9.45 0 9 0.45 9 1V4.82L9.66 4.16C10.01 3.81 10.48 3.57 11 3.51V2H14V7H11.41L11.7 6.71C11.89 6.53 12 6.28 12 6C12 5.45 11.55 5 11 5C10.72 5 10.47 5.11 10.29 5.29L8.29 7.29C8.11 7.47 8 7.72 8 8C8 8.28 8.11 8.53 8.29 8.71L10.29 10.71C10.47 10.89 10.72 11 11 11C11.55 11 12 10.55 12 10C12 9.72 11.89 9.47 11.71 9.29L11.41 9H14V14H11V12.49C10.48 12.43 10.01 12.2 9.66 11.84L9 11.18V15C9 15.55 9.45 16 10 16H15C15.55 16 16 15.55 16 15V1C16 0.45 15.55 0 15 0Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableMergeColumnsIcon = convertIcon(Icon, "table-merge-columns");
export default TableMergeColumnsIcon;
