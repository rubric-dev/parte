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
        d="M8 4C11.31 4 14 3.1 14 2C14 0.9 11.31 0 8 0C4.68 0 2 0.9 2 2C2 3.1 4.68 4 8 4ZM2 3.52V8C2 9.1 4.69 10 8 10C11.31 10 14 9.1 14 8V3.52C12.78 4.4 10.56 5 8 5C5.44 5 3.22 4.4 2 3.52ZM2 9.52V14C2 15.1 4.69 16 8 16C11.31 16 14 15.1 14 14V9.52C12.78 10.4 10.56 11 8 11C5.44 11 3.22 10.4 2 9.52Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataDatabaseIcon = convertIcon(Icon, "data-database");
export default DataDatabaseIcon;
