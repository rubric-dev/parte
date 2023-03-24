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
        d="M4 9H8C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7H4C3.45 7 3 7.45 3 8C3 8.55 3.45 9 4 9ZM15 0H1C0.45 0 0 0.45 0 1V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V1C16 0.45 15.55 0 15 0ZM10 14H2V2H10V14ZM14 14H11V2H14V14Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableRemoveColumnLeftIcon = convertIcon(Icon, "table-remove-column-left");
export default TableRemoveColumnLeftIcon;
