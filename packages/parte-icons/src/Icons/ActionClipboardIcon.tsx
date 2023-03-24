import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 2C11 1.45 10.55 1 10 1H10.22C9.88 0.4 9.24 0 8.5 0C7.76 0 7.12 0.4 6.78 1H7C6.45 1 6 1.45 6 2V3H11V2ZM13 2H12V4H5V2H4C3.45 2 3 2.45 3 3V15C3 15.55 3.45 16 4 16H13C13.55 16 14 15.55 14 15V3C14 2.45 13.55 2 13 2Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionClipboardIcon = convertIcon(Icon, "action-clipboard");
export default ActionClipboardIcon;
