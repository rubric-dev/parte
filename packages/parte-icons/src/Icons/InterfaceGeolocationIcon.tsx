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
        d="M.932 7.21 7.84 9.091l1.882 6.899L15.991.93.93 7.21Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceGeolocationIcon = convertIcon(Icon, "interface-geolocation");
export default InterfaceGeolocationIcon;
