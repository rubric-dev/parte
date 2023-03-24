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
        d="M9 11C9 11.55 9.45 12 10 12C10.28 12 10.53 11.89 10.71 11.71L14.71 7.71C14.89 7.53 15 7.28 15 7C15 6.45 14.55 6 14 6C13.72 6 13.47 6.11 13.29 6.29L9.29 10.29C9.11 10.47 9 10.72 9 11ZM4 6C4.28 6 4.53 5.89 4.71 5.71L8.71 1.71C8.89 1.53 9 1.28 9 1C9 0.45 8.55 0 8 0C7.72 0 7.47 0.11 7.29 0.29L3.29 4.29C3.11 4.47 3 4.72 3 5C3 5.55 3.45 6 4 6ZM8 10L13 5L12.21 4.21L12.71 3.71C12.89 3.53 13 3.28 13 3C13 2.45 12.55 2 12 2C11.72 2 11.47 2.11 11.29 2.29L10.79 2.79L10 2L5 7L5.79 7.79L0.29 13.29C0.11 13.47 0 13.72 0 14C0 14.55 0.45 15 1 15C1.28 15 1.53 14.89 1.71 14.71L7.21 9.21L8 10ZM15 14H7C6.45 14 6 14.45 6 15C6 15.55 6.45 16 7 16H15C15.55 16 16 15.55 16 15C16 14.45 15.55 14 15 14Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionTakeActionIcon = convertIcon(Icon, "action-take-action");
export default ActionTakeActionIcon;
