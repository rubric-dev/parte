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
        d="M0 3.06v9.88L4.94 8 0 3.06ZM14.94 2H1.06L8 8.94 14.94 2Zm-6.41 8.53c-.14.14-.32.22-.53.22-.21 0-.39-.08-.53-.22L6 9.06 1.06 14h13.88L10 9.06l-1.47 1.47ZM11.06 8 16 12.94V3.06L11.06 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceEnvelopeIcon = convertIcon(Icon, "interface-envelope");
export default InterfaceEnvelopeIcon;
