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
        d="M15 1H1C0.45 1 0 1.45 0 2V14C0 14.55 0.45 15 1 15H15C15.55 15 16 14.55 16 14V2C16 1.45 15.55 1 15 1ZM4 13H2V3H4V13ZM7 13H5V3H7V13ZM14 13H8V3H14V13Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableColumnLayoutIcon = convertIcon(Icon, "table-column-layout");
export default TableColumnLayoutIcon;
