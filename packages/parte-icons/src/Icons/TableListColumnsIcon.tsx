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
        d="M6 1C6.55 1 7 1.45 7 2C7 2.55 6.55 3 6 3H1C0.45 3 0 2.55 0 2C0 1.45 0.45 1 1 1H6ZM6 5C6.55 5 7 5.45 7 6C7 6.55 6.55 7 6 7H1C0.45 7 0 6.55 0 6C0 5.45 0.45 5 1 5H6ZM6 9C6.55 9 7 9.45 7 10C7 10.55 6.55 11 6 11H1C0.45 11 0 10.55 0 10C0 9.45 0.45 9 1 9H6ZM6 13C6.55 13 7 13.45 7 14C7 14.55 6.55 15 6 15H1C0.45 15 0 14.55 0 14C0 13.45 0.45 13 1 13H6ZM15 1C15.55 1 16 1.45 16 2C16 2.55 15.55 3 15 3H10C9.45 3 9 2.55 9 2C9 1.45 9.45 1 10 1H15ZM15 5C15.55 5 16 5.45 16 6C16 6.55 15.55 7 15 7H10C9.45 7 9 6.55 9 6C9 5.45 9.45 5 10 5H15ZM15 9C15.55 9 16 9.45 16 10C16 10.55 15.55 11 15 11H10C9.45 11 9 10.55 9 10C9 9.45 9.45 9 10 9H15ZM15 13C15.55 13 16 13.45 16 14C16 14.55 15.55 15 15 15H10C9.45 15 9 14.55 9 14C9 13.45 9.45 13 10 13H15Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableListColumnsIcon = convertIcon(Icon, "table-list-columns");
export default TableListColumnsIcon;
