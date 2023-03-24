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
        d="M15 10C14.72 10 14.47 10.11 14.29 10.29L12 12.59L10.71 11.3C10.53 11.11 10.28 11 10 11C9.45 11 9 11.45 9 12C9 12.28 9.11 12.53 9.29 12.71L11.29 14.71C11.47 14.89 11.72 15 12 15C12.28 15 12.53 14.89 12.71 14.71L15.71 11.71C15.89 11.53 16 11.28 16 11C16 10.45 15.55 10 15 10ZM12 2C12 1.45 11.55 1 11 1H1C0.45 1 0 1.45 0 2C0 2.28 0.11 2.53 0.29 2.71L4 6.41V12C4 12.55 4.45 13 5 13C5.28 13 5.53 12.89 5.71 12.71L7.71 10.71C7.89 10.53 8 10.28 8 10V6.41L11.71 2.7C11.89 2.53 12 2.28 12 2Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionFilterKeepIcon = convertIcon(Icon, "action-filter-keep");
export default ActionFilterKeepIcon;
