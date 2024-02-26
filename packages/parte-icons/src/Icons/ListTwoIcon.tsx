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
        d="M3.00033 14C3.73669 14 4.33366 13.403 4.33366 12.6666C4.33366 11.9303 3.73669 11.3333 3.00033 11.3333C2.26395 11.3333 1.66699 11.9303 1.66699 12.6666C1.66699 13.403 2.26395 14 3.00033 14Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3.00033 4.66667C3.73669 4.66667 4.33366 4.06973 4.33366 3.33333C4.33366 2.59695 3.73669 2 3.00033 2C2.26395 2 1.66699 2.59695 1.66699 3.33333C1.66699 4.06973 2.26395 4.66667 3.00033 4.66667Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3.00033 9.33335C3.73669 9.33335 4.33366 8.73642 4.33366 8.00002C4.33366 7.26362 3.73669 6.66669 3.00033 6.66669C2.26395 6.66669 1.66699 7.26362 1.66699 8.00002C1.66699 8.73642 2.26395 9.33335 3.00033 9.33335Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 8H14.3333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12.6667H14.3333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 3.33331H14.3333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ListTwoIcon = convertIcon(Icon, "list-two");
export default ListTwoIcon;
