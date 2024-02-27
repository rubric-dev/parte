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
      <g clipPath="url(#clip0_5419_18203)">
        <path
          d="M7.99956 1.33331L9.75066 2.61066L11.9181 2.60653L12.584 4.66921L14.3399 5.93988L13.6662 7.99998L14.3399 10.0601L12.584 11.3307L11.9181 13.3934L9.75066 13.3893L7.99956 14.6666L6.24846 13.3893L4.08099 13.3934L3.41512 11.3307L1.65918 10.0601L2.33289 7.99998L1.65918 5.93988L3.41512 4.66921L4.08099 2.60653L6.24846 2.61066L7.99956 1.33331Z"
          fill="currentcolor"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.66699 7.99998L7.33366 9.66665L10.667 6.33331"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5419_18203">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
const FillBadgeIcon = convertIcon(Icon, "fill-badge");
export default FillBadgeIcon;
