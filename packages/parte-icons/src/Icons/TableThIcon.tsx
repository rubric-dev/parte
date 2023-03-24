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
        d="M15 1H1C0.4 1 0 1.5 0 2V14C0 14.6 0.4 15 1 15H15C15.6 15 16 14.6 16 14V2C16 1.5 15.6 1 15 1ZM6 13H2V11H6V13ZM6 10H2V8H6V10ZM6 7H2V5H6V7ZM14 13H7V11H14V13ZM14 10H7V8H14V10ZM14 7H7V5H14V7Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableThIcon = convertIcon(Icon, "table-th");
export default TableThIcon;
