import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M7.29 8.71c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L8 6.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4ZM12 8c-.28 0-.53.11-.71.29L8 11.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4A1.003 1.003 0 0 0 12 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceDoubleChevronDownIcon = convertIcon(
  Icon,
  "interface-double-chevron-down"
);
export default InterfaceDoubleChevronDownIcon;
