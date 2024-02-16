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
        d="M13.3337 7.66671V4.66671L10.3337 1.33337H3.33366C2.96547 1.33337 2.66699 1.63185 2.66699 2.00004V14C2.66699 14.3682 2.96547 14.6667 3.33366 14.6667H6.66699"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M11.3333 12C12.0697 12 12.6667 11.4031 12.6667 10.6667C12.6667 9.93033 12.0697 9.33337 11.3333 9.33337C10.597 9.33337 10 9.93033 10 10.6667C10 11.4031 10.597 12 11.3333 12Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M14.0003 14.6667C14.0003 13.1939 12.8064 12 11.3337 12C9.86089 12 8.66699 13.1939 8.66699 14.6667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M10 1.33337V4.66671H13.3333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileStaffOneIcon = convertIcon(Icon, "file-staff-one");
export default FileStaffOneIcon;
