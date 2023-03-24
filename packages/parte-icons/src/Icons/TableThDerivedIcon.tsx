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
        d="M5.6 10L5.3 10.3C5.1 10.5 5 10.7 5 11C5 11.6 5.4 12 6 12C6.3 12 6.5 11.9 6.7 11.7L8.7 9.7C8.9 9.5 9 9.3 9 9C9 8.7 8.9 8.5 8.7 8.3L6.7 6.3C6.5 6.1 6.3 6 6 6C5.5 6 5 6.4 5 7C5 7.3 5.1 7.5 5.3 7.7L5.6 8H1C0.4 8 0 8.4 0 9C0 9.6 0.4 10 1 10H5.6ZM15 1H2C1.5 1 1 1.5 1 2V7H3V5H14V7H8.8L9.4 7.6C9.5 7.7 9.6 7.9 9.7 8H14V10H9.7C9.6 10.1 9.5 10.3 9.4 10.4L8.8 11H14V13H3V11H1V14C1 14.5 1.5 15 2 15H15C15.6 15 16 14.5 16 14V2C16 1.5 15.6 1 15 1Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const TableThDerivedIcon = convertIcon(Icon, "table-th-derived");
export default TableThDerivedIcon;
