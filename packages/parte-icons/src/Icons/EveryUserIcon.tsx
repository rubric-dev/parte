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
      <g clipPath="url(#clip0_5419_18190)">
        <path
          d="M4.66667 11.3333C5.58714 11.3333 6.33333 10.5871 6.33333 9.66667C6.33333 8.74619 5.58714 8 4.66667 8C3.74619 8 3 8.74619 3 9.66667C3 10.5871 3.74619 11.3333 4.66667 11.3333Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3337 11.3333C12.2541 11.3333 13.0003 10.5871 13.0003 9.66667C13.0003 8.74619 12.2541 8 11.3337 8C10.4132 8 9.66699 8.74619 9.66699 9.66667C9.66699 10.5871 10.4132 11.3333 11.3337 11.3333Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.99967 4.66665C8.92015 4.66665 9.66634 3.92045 9.66634 2.99998C9.66634 2.07951 8.92015 1.33331 7.99967 1.33331C7.0792 1.33331 6.33301 2.07951 6.33301 2.99998C6.33301 3.92045 7.0792 4.66665 7.99967 4.66665Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.99967 14.6666C7.99967 12.8257 6.50727 11.3333 4.66634 11.3333C2.82539 11.3333 1.33301 12.8257 1.33301 14.6666"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 14.6666C14.6667 12.8257 13.1743 11.3333 11.3333 11.3333C9.4924 11.3333 8 12.8257 8 14.6666"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3337 8.00002C11.3337 6.15909 9.84126 4.66669 8.00033 4.66669C6.15939 4.66669 4.66699 6.15909 4.66699 8.00002"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5419_18190">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
const EveryUserIcon = convertIcon(Icon, "every-user");
export default EveryUserIcon;
