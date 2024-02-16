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
        d="M12.667 1.33337H3.33366C2.96547 1.33337 2.66699 1.63185 2.66699 2.00004V14C2.66699 14.3682 2.96547 14.6667 3.33366 14.6667H12.667C13.0352 14.6667 13.3337 14.3682 13.3337 14V2.00004C13.3337 1.63185 13.0352 1.33337 12.667 1.33337Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M7 4.66663H11"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M7 8H11"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M7 11.3334H11"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99967 5.33333C5.36787 5.33333 5.66634 5.03487 5.66634 4.66667C5.66634 4.29847 5.36787 4 4.99967 4C4.63147 4 4.33301 4.29847 4.33301 4.66667C4.33301 5.03487 4.63147 5.33333 4.99967 5.33333Z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99967 8.66671C5.36787 8.66671 5.66634 8.36824 5.66634 8.00004C5.66634 7.63184 5.36787 7.33337 4.99967 7.33337C4.63147 7.33337 4.33301 7.63184 4.33301 8.00004C4.33301 8.36824 4.63147 8.66671 4.99967 8.66671Z"
        fill="currentcolor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.99967 12C5.36787 12 5.66634 11.7015 5.66634 11.3333C5.66634 10.9651 5.36787 10.6666 4.99967 10.6666C4.63147 10.6666 4.33301 10.9651 4.33301 11.3333C4.33301 11.7015 4.63147 12 4.99967 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ViewListIcon = convertIcon(Icon, "view-list");
export default ViewListIcon;
