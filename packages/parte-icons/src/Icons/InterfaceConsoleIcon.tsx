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
        d="M15 15H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1ZM14 5H2v8h12V5ZM4 6c.28 0 .53.11.71.29l2 2c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2 2a1.003 1.003 0 0 1-1.42-1.42L4.59 9l-1.3-1.29A1.003 1.003 0 0 1 4 6Zm5 4h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceConsoleIcon = convertIcon(Icon, "interface-console");
export default InterfaceConsoleIcon;
