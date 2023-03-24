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
        d="M2 9C1.45 9 1 9.45 1 10C1 10.55 1.45 11 2 11C2.55 11 3 10.55 3 10C3 9.45 2.55 9 2 9ZM2 5C1.45 5 1 5.45 1 6C1 6.55 1.45 7 2 7C2.55 7 3 6.55 3 6C3 5.45 2.55 5 2 5ZM6 9C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11C6.55 11 7 10.55 7 10C7 9.45 6.55 9 6 9ZM14 7C14.55 7 15 6.55 15 6C15 5.45 14.55 5 14 5C13.45 5 13 5.45 13 6C13 6.55 13.45 7 14 7ZM14 9C13.45 9 13 9.45 13 10C13 10.55 13.45 11 14 11C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9ZM10 5C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5ZM10 9C9.45 9 9 9.45 9 10C9 10.55 9.45 11 10 11C10.55 11 11 10.55 11 10C11 9.45 10.55 9 10 9ZM6 5C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7C6.55 7 7 6.55 7 6C7 5.45 6.55 5 6 5Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionDragHandleHorizontalIcon = convertIcon(
  Icon,
  "action-drag-handle-horizontal"
);
export default ActionDragHandleHorizontalIcon;
