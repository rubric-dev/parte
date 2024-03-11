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
      <g clipPath="url(#clip0_5419_18192)">
        <path
          d="M4.66634 5.99998C5.95501 5.99998 6.99967 4.95531 6.99967 3.66665C6.99967 2.37798 5.95501 1.33331 4.66634 1.33331C3.37767 1.33331 2.33301 2.37798 2.33301 3.66665C2.33301 4.95531 3.37767 5.99998 4.66634 5.99998Z"
          fill="currentcolor"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M11.3333 5.99998C12.622 5.99998 13.6667 4.95531 13.6667 3.66665C13.6667 2.37798 12.622 1.33331 11.3333 1.33331C10.0447 1.33331 9 2.37798 9 3.66665C9 4.95531 10.0447 5.99998 11.3333 5.99998Z"
          fill="currentcolor"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M1.33301 14.6666C1.33301 14.3703 1.33301 13.3703 1.33301 11.6666C1.33301 9.82571 2.58975 8.33331 4.14004 8.33331C4.88857 8.33331 5.44997 8.33331 5.82424 8.33331C7.18591 8.33331 7.99971 9.67561 7.99971 9.67561"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 14.6666C14.6667 14.3703 14.6667 13.3703 14.6667 11.6666C14.6667 9.82571 13.395 8.33331 11.8263 8.33331C11.0688 8.33331 10.5007 8.33331 10.122 8.33331C8.80161 8.33331 7.99741 9.67561 8.00001 9.67561"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.66699 13.3333H12.667"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.4316 12.0861L11.8448 12.5019L12.6712 13.3333L11.8448 14.1871L11.4316 14.6141"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.77678 12.0774L4.35704 12.4953L3.51758 13.331L4.35704 14.1805L4.77678 14.6053"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5419_18192">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
const FillUserToUserTransmissionIcon = convertIcon(
  Icon,
  "fill-user-to-user-transmission"
);
export default FillUserToUserTransmissionIcon;
