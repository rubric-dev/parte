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
        d="M8.46 0C5.42 0 2.95 2.39 2.95 5.33 2.95 8.28 8.46 16 8.46 16s5.51-7.72 5.51-10.67C13.96 2.39 11.5 0 8.46 0Zm0 8a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceMapMarkerIcon = convertIcon(Icon, "interface-map-marker");
export default InterfaceMapMarkerIcon;
