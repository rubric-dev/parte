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
        d="M11 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V7l-5-5Zm3 10H2V4h8v2H3v1h7v1h4v4Zm-3-5V4l3 3h-3Zm-8 3h10V9H3v1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceLabelIcon = convertIcon(Icon, "interface-label");
export default InterfaceLabelIcon;
