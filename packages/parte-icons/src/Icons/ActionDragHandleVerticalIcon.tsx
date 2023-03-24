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
        d="M6 9C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11C6.55 11 7 10.55 7 10C7 9.45 6.55 9 6 9ZM10 3C10.55 3 11 2.55 11 2C11 1.45 10.55 1 10 1C9.45 1 9 1.45 9 2C9 2.55 9.45 3 10 3ZM6 13C5.45 13 5 13.45 5 14C5 14.55 5.45 15 6 15C6.55 15 7 14.55 7 14C7 13.45 6.55 13 6 13ZM6 5C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7C6.55 7 7 6.55 7 6C7 5.45 6.55 5 6 5ZM6 1C5.45 1 5 1.45 5 2C5 2.55 5.45 3 6 3C6.55 3 7 2.55 7 2C7 1.45 6.55 1 6 1ZM10 9C9.45 9 9 9.45 9 10C9 10.55 9.45 11 10 11C10.55 11 11 10.55 11 10C11 9.45 10.55 9 10 9ZM10 5C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5ZM10 13C9.45 13 9 13.45 9 14C9 14.55 9.45 15 10 15C10.55 15 11 14.55 11 14C11 13.45 10.55 13 10 13Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionDragHandleVerticalIcon = convertIcon(
  Icon,
  "action-drag-handle-vertical"
);
export default ActionDragHandleVerticalIcon;
