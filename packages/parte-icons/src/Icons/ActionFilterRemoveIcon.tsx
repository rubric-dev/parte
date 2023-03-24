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
        d="M12 2C12 1.45 11.55 1 11 1H1C0.45 1 0 1.45 0 2C0 2.28 0.11 2.53 0.29 2.71L4 6.41V12C4 12.55 4.45 13 5 13C5.28 13 5.53 12.89 5.71 12.71L7.71 10.71C7.89 10.53 8 10.28 8 10V6.41L11.71 2.7C11.89 2.53 12 2.28 12 2ZM14.41 12L15.7 10.71C15.89 10.53 16 10.28 16 10C16 9.45 15.55 9 15 9C14.72 9 14.47 9.11 14.29 9.29L13 10.59L11.71 9.3C11.53 9.11 11.28 9 11 9C10.45 9 10 9.45 10 10C10 10.28 10.11 10.53 10.29 10.71L11.59 12L10.3 13.29C10.11 13.47 10 13.72 10 14C10 14.55 10.45 15 11 15C11.28 15 11.53 14.89 11.71 14.71L13 13.41L14.29 14.7C14.47 14.89 14.72 15 15 15C15.55 15 16 14.55 16 14C16 13.72 15.89 13.47 15.71 13.29L14.41 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionFilterRemoveIcon = convertIcon(Icon, "action-filter-remove");
export default ActionFilterRemoveIcon;
