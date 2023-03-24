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
        d="M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3A.997.997 0 0 0 8 2c-.28 0-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7Zm6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29.28 0 .53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceDoubleCaretVerticalIcon = convertIcon(
  Icon,
  "interface-double-caret-vertical"
);
export default InterfaceDoubleCaretVerticalIcon;
