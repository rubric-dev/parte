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
        d="M13.3337 7.66665V4.66665L10.3337 1.33331H3.33366C2.96547 1.33331 2.66699 1.63179 2.66699 1.99998V14C2.66699 14.3682 2.96547 14.6666 3.33366 14.6666H7.33366"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66699 12.6667L10.667 14.3334L13.667 10.6667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.33331V4.66665H13.3333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const FileSuccessOneIcon = convertIcon(Icon, "file-success-one");
export default FileSuccessOneIcon;
