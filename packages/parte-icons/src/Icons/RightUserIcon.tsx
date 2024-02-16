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
        d="M7.99967 6.66671C9.47243 6.66671 10.6663 5.4728 10.6663 4.00004C10.6663 2.52728 9.47243 1.33337 7.99967 1.33337C6.52691 1.33337 5.33301 2.52728 5.33301 4.00004C5.33301 5.4728 6.52691 6.66671 7.99967 6.66671Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M14 14.6666C14 11.3529 11.3137 8.66663 8 8.66663C4.6863 8.66663 2 11.3529 2 14.6666"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M10 12L7.33333 14.6667L6 13.3333"
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
const RightUserIcon = convertIcon(Icon, "right-user");
export default RightUserIcon;
