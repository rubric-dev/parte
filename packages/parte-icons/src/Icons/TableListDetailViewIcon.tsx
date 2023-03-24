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
        d="M6 9H1C0.45 9 0 9.45 0 10C0 10.55 0.45 11 1 11H6C6.55 11 7 10.55 7 10C7 9.45 6.55 9 6 9ZM6 13H1C0.45 13 0 13.45 0 14C0 14.55 0.45 15 1 15H6C6.55 15 7 14.55 7 14C7 13.45 6.55 13 6 13ZM15 1H10C9.45 1 9 1.45 9 2V14C9 14.55 9.45 15 10 15H15C15.55 15 16 14.55 16 14V2C16 1.45 15.55 1 15 1ZM6 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7H6C6.55 7 7 6.55 7 6C7 5.45 6.55 5 6 5ZM6 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3H6C6.55 3 7 2.55 7 2C7 1.45 6.55 1 6 1Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableListDetailViewIcon = convertIcon(Icon, "table-list-detail-view");
export default TableListDetailViewIcon;
