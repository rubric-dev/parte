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
      <g clipPath="url(#clip0_6025_39553)">
        <path
          d="M3.33301 12.6667V14.6667H12.6663V12.6667"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.6663 6.66668V4.66668L9.99967 1.33334H3.33301V6.66668"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33301 1.33334V4.66668H12.6663"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9997 6.66666H1.99967C1.63148 6.66666 1.33301 6.96513 1.33301 7.33332V12C1.33301 12.3682 1.63148 12.6667 1.99967 12.6667H13.9997C14.3679 12.6667 14.6663 12.3682 14.6663 12V7.33332C14.6663 6.96513 14.3679 6.66666 13.9997 6.66666Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M7 8.33334V11" stroke="currentcolor" strokeLinecap="round" />
        <path
          d="M3.33301 8.33334V11"
          stroke="currentcolor"
          strokeLinecap="round"
        />
        <path
          d="M10.667 11V8.33334H12.3337"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.667 10H12.3337"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33301 8.33334H4.49967C4.95991 8.33334 5.33301 8.70644 5.33301 9.16668C5.33301 9.62691 4.95991 10 4.49967 10H3.33301"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 8.33334H7.66667C8.40303 8.33334 9 8.93031 9 9.66668C9 10.403 8.40303 11 7.66667 11H7"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33301 4H6.66634"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6025_39553">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
const FilePdfOneIcon = convertIcon(Icon, "file-pdf-one");
export default FilePdfOneIcon;
