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
        d="M2.66699 5.00001V2.00001C2.66699 1.63182 2.96547 1.33334 3.33366 1.33334H12.667C13.0352 1.33334 13.3337 1.63182 13.3337 2.00001V14C13.3337 14.3682 13.0352 14.6667 12.667 14.6667H3.33366C2.96547 14.6667 2.66699 14.3682 2.66699 14V11"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.333 5H11.333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.33301 7.66666H11.333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.33301 10.3333H11.333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.33301 5H1.33301V11H7.33301V5Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33301 7L5.33301 9"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33301 7L3.33301 9"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ExcelIcon = convertIcon(Icon, "excel");
export default ExcelIcon;
