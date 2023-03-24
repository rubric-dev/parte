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
        d="M6.6 3.3C5.3 4.4 4.5 6.1 4.5 8C4.5 9.9 5.3 11.6 6.6 12.7C6.1 12.9 5.6 13 5 13C2.2 13 0 10.8 0 8C0 5.2 2.2 3 5 3C5.6 3 6.1 3.1 6.6 3.3ZM4.64 11.98C3.92 10.83 3.5 9.46 3.5 8C3.5 6.54 3.92 5.17 4.64 4.02C2.6 4.2 1 5.91 1 8C1 10.09 2.6 11.8 4.64 11.98ZM8 4C6.8 4.9 6 6.4 6 8C6 9.6 6.8 11.1 8 12C9.2 11.1 10 9.7 10 8C10 6.3 9.2 4.9 8 4ZM11 3C13.8 3 16 5.2 16 8C16 10.8 13.8 13 11 13C10.4 13 9.9 12.9 9.4 12.7C10.7 11.6 11.5 9.8 11.5 8C11.5 6.2 10.7 4.5 9.4 3.3C9.9 3.1 10.4 3 11 3ZM11.35 4.02C12.08 5.17 12.49 6.54 12.49 8C12.49 9.46 12.07 10.83 11.35 11.98C13.39 11.8 14.99 10.08 14.99 8C14.99 5.92 13.39 4.2 11.35 4.02Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionInnerJoinIcon = convertIcon(Icon, "action-inner-join");
export default ActionInnerJoinIcon;
