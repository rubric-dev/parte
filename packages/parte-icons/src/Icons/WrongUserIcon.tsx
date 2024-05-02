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
        d="M7.99967 6.66667C9.47243 6.66667 10.6663 5.47276 10.6663 4C10.6663 2.52724 9.47243 1.33334 7.99967 1.33334C6.52692 1.33334 5.33301 2.52724 5.33301 4C5.33301 5.47276 6.52692 6.66667 7.99967 6.66667Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.6667C14 11.353 11.3137 8.66666 8 8.66666C4.6863 8.66666 2 11.353 2 14.6667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66699 12L9.33366 14.6667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33366 12L6.66699 14.6667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const WrongUserIcon = convertIcon(Icon, "wrong-user");
export default WrongUserIcon;
