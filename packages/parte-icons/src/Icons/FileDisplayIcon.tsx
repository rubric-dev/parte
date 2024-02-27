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
        d="M3.33366 14.6666H12.667C13.0352 14.6666 13.3337 14.3682 13.3337 14V4.66665H10.0003V1.33331H3.33366C2.96547 1.33331 2.66699 1.63179 2.66699 1.99998V14C2.66699 14.3682 2.96547 14.6666 3.33366 14.6666Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.33331L13.3333 4.66665"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.3333C9.65687 11.3333 11 9.33331 11 9.33331C11 9.33331 9.65687 7.33331 8 7.33331C6.34313 7.33331 5 9.33331 5 9.33331C5 9.33331 6.34313 11.3333 8 11.3333Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.99967 10C8.36787 10 8.66634 9.70155 8.66634 9.33335C8.66634 8.96515 8.36787 8.66669 7.99967 8.66669C7.63147 8.66669 7.33301 8.96515 7.33301 9.33335C7.33301 9.70155 7.63147 10 7.99967 10Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const FileDisplayIcon = convertIcon(Icon, "file-display");
export default FileDisplayIcon;
