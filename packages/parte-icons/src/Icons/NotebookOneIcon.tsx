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
        d="M2.66699 2.00001C2.66699 1.63182 2.96547 1.33334 3.33366 1.33334H12.667C13.0352 1.33334 13.3337 1.63182 13.3337 2.00001V14C13.3337 14.3682 13.0352 14.6667 12.667 14.6667H3.33366C2.96547 14.6667 2.66699 14.3682 2.66699 14V2.00001Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5.33301 1.33334V14.6667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4H10.6667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.66666H10.6667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33301 1.33334H7.33301"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33301 14.6667H7.33301"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const NotebookOne = convertIcon(Icon, "notebook-one");
export default NotebookOne;
