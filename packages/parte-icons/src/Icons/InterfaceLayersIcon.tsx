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
        d="m.55 4.89 7 3.5c.14.07.29.11.45.11.16 0 .31-.04.45-.11l7-3.5a.998.998 0 0 0-.06-1.81L8.4.08a1.006 1.006 0 0 0-.79 0l-6.99 3a.992.992 0 0 0-.07 1.81ZM15 10c-.16 0-.31.04-.45.11L8 13.38 1.45 10.1c-.14-.06-.29-.1-.45-.1-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3.5c.14.07.29.11.45.11.16 0 .31-.04.45-.11l7-3.5c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1Zm0-3.5c-.16 0-.31.04-.45.11L8 9.88 1.45 6.61A.997.997 0 0 0 1 6.5c-.55 0-1 .45-1 1 0 .39.23.73.55.89l7 3.5c.14.07.29.11.45.11.16 0 .31-.04.45-.11l7-3.5c.32-.16.55-.5.55-.89 0-.55-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceLayersIcon = convertIcon(Icon, "interface-layers");
export default InterfaceLayersIcon;
