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
        d="M7.99967 6.66665C9.47243 6.66665 10.6663 5.47274 10.6663 3.99998C10.6663 2.52722 9.47243 1.33331 7.99967 1.33331C6.52692 1.33331 5.33301 2.52722 5.33301 3.99998C5.33301 5.47274 6.52692 6.66665 7.99967 6.66665Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.6667C14 11.353 11.3137 8.66669 8 8.66669C4.6863 8.66669 2 11.353 2 14.6667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const UserIcon = convertIcon(Icon, "user");
export default UserIcon;
