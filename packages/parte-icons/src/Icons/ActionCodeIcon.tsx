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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.71 7.29L12.71 4.29C12.53 4.11 12.28 4 12 4C11.45 4 11 4.45 11 5C11 5.28 11.11 5.53 11.29 5.71L13.59 8L11.3 10.29C11.11 10.47 11 10.72 11 11C11 11.55 11.45 12 12 12C12.28 12 12.53 11.89 12.71 11.71L15.71 8.71C15.89 8.53 16 8.28 16 8C16 7.72 15.89 7.47 15.71 7.29ZM5 5C5 4.45 4.55 4 4 4C3.72 4 3.47 4.11 3.29 4.29L0.29 7.29C0.11 7.47 0 7.72 0 8C0 8.28 0.11 8.53 0.29 8.71L3.29 11.71C3.47 11.89 3.72 12 4 12C4.55 12 5 11.55 5 11C5 10.72 4.89 10.47 4.71 10.29L2.41 8L4.7 5.71C4.89 5.53 5 5.28 5 5ZM9 2C8.52 2 8.13 2.35 8.04 2.81L6.04 12.81C6.03 12.87 6 12.93 6 13C6 13.55 6.45 14 7 14C7.48 14 7.87 13.65 7.96 13.19L9.96 3.19C9.97 3.13 10 3.07 10 3C10 2.45 9.55 2 9 2Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionCodeIcon = convertIcon(Icon, "action-code");
export default ActionCodeIcon;
