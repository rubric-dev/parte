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
        d="M14 0H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1Zm-1 14H3v-3h10v3Zm0-4H3V2h10v8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceWidgetFooterIcon = convertIcon(Icon, "interface-widget-footer");
export default InterfaceWidgetFooterIcon;
