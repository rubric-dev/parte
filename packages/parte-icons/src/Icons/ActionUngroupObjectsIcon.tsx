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
        d="M3.5 5C1.57 5 0 6.57 0 8.5C0 10.43 1.57 12 3.5 12C5.43 12 7 10.43 7 8.5C7 6.57 5.43 5 3.5 5ZM12.5 5C10.57 5 9 6.57 9 8.5C9 10.43 10.57 12 12.5 12C14.43 12 16 10.43 16 8.5C16 6.57 14.43 5 12.5 5Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionUngroupObjectsIcon = convertIcon(Icon, "action-ungroup-objects");
export default ActionUngroupObjectsIcon;
