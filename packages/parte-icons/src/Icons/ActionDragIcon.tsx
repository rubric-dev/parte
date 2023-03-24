import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size! * 2}
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width="12" height="24" rx="2" fill="#EDEFF5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 13C3.45 13 3 13.45 3 14C3 14.55 3.45 15 4 15C4.55 15 5 14.55 5 14C5 13.45 4.55 13 4 13ZM8 7C8.55 7 9 6.55 9 6C9 5.45 8.55 5 8 5C7.45 5 7 5.45 7 6C7 6.55 7.45 7 8 7ZM4 17C3.45 17 3 17.45 3 18C3 18.55 3.45 19 4 19C4.55 19 5 18.55 5 18C5 17.45 4.55 17 4 17ZM4 9C3.45 9 3 9.45 3 10C3 10.55 3.45 11 4 11C4.55 11 5 10.55 5 10C5 9.45 4.55 9 4 9ZM4 5C3.45 5 3 5.45 3 6C3 6.55 3.45 7 4 7C4.55 7 5 6.55 5 6C5 5.45 4.55 5 4 5ZM8 13C7.45 13 7 13.45 7 14C7 14.55 7.45 15 8 15C8.55 15 9 14.55 9 14C9 13.45 8.55 13 8 13ZM8 9C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11C8.55 11 9 10.55 9 10C9 9.45 8.55 9 8 9ZM8 17C7.45 17 7 17.45 7 18C7 18.55 7.45 19 8 19C8.55 19 9 18.55 9 18C9 17.45 8.55 17 8 17Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionDragIcon = convertIcon(Icon, "action-drag");
export default ActionDragIcon;
