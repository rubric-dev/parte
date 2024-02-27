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
        d="M5.66699 9.66669L7.66699 11.3334L10.667 7.66669"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const FileSuccessIcon = convertIcon(Icon, "file-success");
export default FileSuccessIcon;
