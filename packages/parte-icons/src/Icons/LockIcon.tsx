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
        d="M13.3333 7.33331H2.66667C2.29848 7.33331 2 7.63179 2 7.99998V14C2 14.3682 2.29848 14.6666 2.66667 14.6666H13.3333C13.7015 14.6666 14 14.3682 14 14V7.99998C14 7.63179 13.7015 7.33331 13.3333 7.33331Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4.66699 7.33331V4.66665C4.66699 2.8257 6.15939 1.33331 8.00033 1.33331C9.84126 1.33331 11.3337 2.8257 11.3337 4.66665V7.33331"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10V12"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const LockIcon = convertIcon(Icon, "lock");
export default LockIcon;
