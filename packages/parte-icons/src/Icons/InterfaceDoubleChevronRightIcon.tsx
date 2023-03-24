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
        d="M9 8c0-.28-.11-.53-.29-.71l-4-4a1.003 1.003 0 0 0-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4C8.89 8.53 9 8.28 9 8Zm4.71-.71-4-4a1.003 1.003 0 0 0-1.42 1.42L11.59 8 8.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceDoubleChevronRightIcon = convertIcon(
  Icon,
  "interface-double-chevron-right"
);
export default InterfaceDoubleChevronRightIcon;
