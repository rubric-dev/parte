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
        d="M7.29 6.71c.18.18.43.29.71.29.28 0 .53-.11.71-.29l4-4a1.003 1.003 0 0 0-1.42-1.42L8 4.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42l4 4Zm1.42 2.58A.997.997 0 0 0 8 9c-.28 0-.53.11-.71.29l-4 4a1.003 1.003 0 0 0 1.42 1.42L8 11.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-4-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceCollapseAllIcon = convertIcon(Icon, "interface-collapse-all");
export default InterfaceCollapseAllIcon;
