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
        d="M9 8C9 8.55 9.45 9 10 9H15C15.55 9 16 8.55 16 8C16 7.45 15.55 7 15 7H10C9.45 7 9 7.45 9 8ZM12 2C12 1.45 11.55 1 11 1H1C0.45 1 0 1.45 0 2C0 2.28 0.11 2.53 0.29 2.71L4 6.41V12C4 12.55 4.45 13 5 13C5.28 13 5.53 12.89 5.71 12.71L7.71 10.71C7.89 10.53 8 10.28 8 10V6.41L11.71 2.7C11.89 2.53 12 2.28 12 2ZM15 10H10C9.45 10 9 10.45 9 11C9 11.55 9.45 12 10 12H15C15.55 12 16 11.55 16 11C16 10.45 15.55 10 15 10ZM15 13H10C9.45 13 9 13.45 9 14C9 14.55 9.45 15 10 15H15C15.55 15 16 14.55 16 14C16 13.45 15.55 13 15 13Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionFilterListIcon = convertIcon(Icon, "action-filter-list");
export default ActionFilterListIcon;
