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
        d="M8 9H9V10C9 10.55 9.45 11 10 11C10.55 11 11 10.55 11 10V9H12C12.55 9 13 8.55 13 8C13 7.45 12.55 7 12 7H11V6C11 5.45 10.55 5 10 5C9.45 5 9 5.45 9 6V7H8C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9ZM15 0H1C0.45 0 0 0.45 0 1V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V1C16 0.45 15.55 0 15 0ZM5 14H2V2H5V14ZM14 14H6V2H14V14Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableAddColumnRightIcon = convertIcon(Icon, "table-add-column-right");
export default TableAddColumnRightIcon;
