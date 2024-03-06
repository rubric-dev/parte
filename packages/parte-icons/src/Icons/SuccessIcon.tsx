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
      <g clipPath="url(#clip0_5419_18179)">
        <path
          d="M7.99967 14.6666C9.84061 14.6666 11.5073 13.9204 12.7137 12.714C13.9201 11.5076 14.6663 9.84091 14.6663 7.99998C14.6663 6.15905 13.9201 4.49238 12.7137 3.28593C11.5073 2.07951 9.84061 1.33331 7.99967 1.33331C6.15874 1.33331 4.49207 2.07951 3.28563 3.28593C2.0792 4.49238 1.33301 6.15905 1.33301 7.99998C1.33301 9.84091 2.0792 11.5076 3.28563 12.714C4.49207 13.9204 6.15874 14.6666 7.99967 14.6666Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5.33301 8L7.33301 10L11.333 6"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5419_18179">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
const SuccessIcon = convertIcon(Icon, "success");
export default SuccessIcon;
