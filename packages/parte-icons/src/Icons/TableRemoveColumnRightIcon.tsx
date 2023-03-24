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
        d="M15 0H1C0.45 0 0 0.45 0 1V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V1C16 0.45 15.55 0 15 0ZM5 14H2V2H5V14ZM14 14H6V2H14V14ZM8 9H12C12.55 9 13 8.55 13 8C13 7.45 12.55 7 12 7H8C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableRemoveColumnRightIcon = convertIcon(
  Icon,
  "table-remove-column-right"
);
export default TableRemoveColumnRightIcon;
