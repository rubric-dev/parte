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
      <g clipPath="url(#clip0_5833_30638)">
        <path
          d="M1.66699 8H14.3337"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33333 1.33334H6.66667C6.29847 1.33334 6 1.63182 6 2.00001V4.66668C6 5.03488 6.29847 5.33334 6.66667 5.33334H9.33333C9.70153 5.33334 10 5.03488 10 4.66668V2.00001C10 1.63182 9.70153 1.33334 9.33333 1.33334Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5.33333 10.6667H2.66667C2.29848 10.6667 2 10.9651 2 11.3333V14C2 14.3682 2.29848 14.6667 2.66667 14.6667H5.33333C5.70153 14.6667 6 14.3682 6 14V11.3333C6 10.9651 5.70153 10.6667 5.33333 10.6667Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M13.3333 10.6667H10.6667C10.2985 10.6667 10 10.9651 10 11.3333V14C10 14.3682 10.2985 14.6667 10.6667 14.6667H13.3333C13.7015 14.6667 14 14.3682 14 14V11.3333C14 10.9651 13.7015 10.6667 13.3333 10.6667Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 8.00001V5.33334"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10.6667V8"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 10.6667V8"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5833_30638">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
const ConnectionPointIcon = convertIcon(Icon, "connection-point");
export default ConnectionPointIcon;
