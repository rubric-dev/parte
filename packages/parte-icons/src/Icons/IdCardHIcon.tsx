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
        d="M13.9997 2.66666H1.99967C1.63148 2.66666 1.33301 2.96513 1.33301 3.33332V12.6667C1.33301 13.0348 1.63148 13.3333 1.99967 13.3333H13.9997C14.3679 13.3333 14.6663 13.0348 14.6663 12.6667V3.33332C14.6663 2.96513 14.3679 2.66666 13.9997 2.66666Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5.66634 8.33332C6.40271 8.33332 6.99967 7.73636 6.99967 6.99999C6.99967 6.26362 6.40271 5.66666 5.66634 5.66666C4.92997 5.66666 4.33301 6.26362 4.33301 6.99999C4.33301 7.73636 4.92997 8.33332 5.66634 8.33332Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.66699 10.3333C7.66699 9.22878 6.77156 8.33334 5.66699 8.33334C4.56243 8.33334 3.66699 9.22878 3.66699 10.3333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33301 6.66666H11.9997"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.33334H12"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const IdCardHIcon = convertIcon(Icon, "id-card-h");
export default IdCardHIcon;
