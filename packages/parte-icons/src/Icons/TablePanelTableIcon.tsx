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
        d="M15 1H1C0.4 1 0 1.4 0 2V13C0 13.6 0.4 14 1 14H15C15.6 14 16 13.6 16 13V2C16 1.4 15.6 1 15 1ZM8 9H6V7H8V9ZM8 6H6V4H8V6ZM2 12V3H5V12H2ZM6 12V10H8V12H6ZM14 12H9V10H14V12ZM14 9H9V7H14V9ZM14 6H9V4H14V6Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TablePanelTableIcon = convertIcon(Icon, "table-panel-table");
export default TablePanelTableIcon;
