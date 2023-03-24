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
        d="M13 8H8v5h5V8Zm0-5H8v4h5V3Zm2-3H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1Zm-1 14H2V2h12v12ZM7 3H3v10h4V3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceControlIcon = convertIcon(Icon, "interface-control");
export default InterfaceControlIcon;
