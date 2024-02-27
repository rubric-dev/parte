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
        d="M1.33301 14H14.6663"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66699 8.66669H3.33366C2.96547 8.66669 2.66699 8.96516 2.66699 9.33335V13.3334C2.66699 13.7015 2.96547 14 3.33366 14H4.66699C5.03518 14 5.33366 13.7015 5.33366 13.3334V9.33335C5.33366 8.96516 5.03518 8.66669 4.66699 8.66669Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 11.3333H4.33333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6663 1.33331H5.99967C5.63148 1.33331 5.33301 1.63179 5.33301 1.99998V13.3333C5.33301 13.7015 5.63148 14 5.99967 14H12.6663C13.0345 14 13.333 13.7015 13.333 13.3333V1.99998C13.333 1.63179 13.0345 1.33331 12.6663 1.33331Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.66634 3.33331H7.33301V4.66665H8.66634V3.33331Z"
        fill="currentcolor"
      />
      <path
        d="M11.3333 3.33331H10V4.66665H11.3333V3.33331Z"
        fill="currentcolor"
      />
      <path
        d="M8.66634 5.66669H7.33301V7.00002H8.66634V5.66669Z"
        fill="currentcolor"
      />
      <path
        d="M11.3333 5.66669H10V7.00002H11.3333V5.66669Z"
        fill="currentcolor"
      />
      <path d="M11.3333 8H10V9.33333H11.3333V8Z" fill="currentcolor" />
      <path
        d="M11.3333 10.3333H10V11.6666H11.3333V10.3333Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const CityIcon = convertIcon(Icon, "city");
export default CityIcon;
