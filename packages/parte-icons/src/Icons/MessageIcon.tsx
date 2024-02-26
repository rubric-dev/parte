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
      <g clipPath="url(#clip0_5353_29764)">
        <path
          d="M14.6664 8.00004C14.6664 11.6819 11.6816 14.6667 7.99969 14.6667C6.00852 14.6667 1.33301 14.6667 1.33301 14.6667C1.33301 14.6667 1.33301 9.69077 1.33301 8.00004C1.33301 4.31814 4.31779 1.33337 7.99969 1.33337C11.6816 1.33337 14.6664 4.31814 14.6664 8.00004Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66699 6H10.667"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66699 8.66669H10.667"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66699 11.3333H8.00033"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5353_29764">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
const MessageIcon = convertIcon(Icon, "message");
export default MessageIcon;
