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
        d="M1.33301 13H14.6663V8V3H7.99967H1.33301V8V13Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 3L7.99967 8L14.6663 3"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99967 3H1.33301V8"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 8V3H8"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const MailIcon = convertIcon(Icon, "mail");
export default MailIcon;
