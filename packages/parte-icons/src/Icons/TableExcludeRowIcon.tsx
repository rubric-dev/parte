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
        d="M0 10C0 10.55 0.45 11 1 11C1.28 11 1.53 10.89 1.71 10.71L3 9.41L4.29 10.7C4.47 10.89 4.72 11 5 11C5.55 11 6 10.55 6 10C6 9.72 5.89 9.47 5.71 9.29L4.41 8L5.7 6.71C5.89 6.53 6 6.28 6 6C6 5.45 5.55 5 5 5C4.72 5 4.47 5.11 4.29 5.29L3 6.59L1.71 5.29C1.53 5.11 1.28 5 1 5C0.45 5 0 5.45 0 6C0 6.28 0.11 6.53 0.29 6.71L1.59 8L0.29 9.29C0.11 9.47 0 9.72 0 10ZM1 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3ZM15 13H1C0.45 13 0 13.45 0 14C0 14.55 0.45 15 1 15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13ZM14 6H9C7.9 6 7 6.9 7 8C7 9.1 7.9 10 9 10H14C15.1 10 16 9.1 16 8C16 6.9 15.1 6 14 6Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableExcludeRowIcon = convertIcon(Icon, "table-exclude-row");
export default TableExcludeRowIcon;
