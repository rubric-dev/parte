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
        d="M15 0H1C0.45 0 0 0.45 0 1V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V1C16 0.45 15.55 0 15 0ZM10 14H2V2H10V14ZM14 14H11V2H14V14ZM4 9H5V10C5 10.55 5.45 11 6 11C6.55 11 7 10.55 7 10V9H8C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7H7V6C7 5.45 6.55 5 6 5C5.45 5 5 5.45 5 6V7H4C3.45 7 3 7.45 3 8C3 8.55 3.45 9 4 9Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableAddColumnLeftIcon = convertIcon(Icon, "table-add-column-left");
export default TableAddColumnLeftIcon;
