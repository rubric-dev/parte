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
        d="M15 0.949951H1C0.45 0.949951 0 1.39995 0 1.94995V13.95C0 14.5 0.45 14.95 1 14.95H15C15.55 14.95 16 14.5 16 13.95V1.94995C16 1.39995 15.55 0.949951 15 0.949951ZM6 12.95H2V6.94995H6V12.95ZM14 12.95H7V6.94995H14V12.95ZM14 5.94995H2V2.94995H14V5.94995Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TablePageLayoutIcon = convertIcon(Icon, "table-page-layout");
export default TablePageLayoutIcon;
