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
        d="M11 7H9V5C9 4.45 8.55 4 8 4C7.45 4 7 4.45 7 5V7H5C4.45 7 4 7.45 4 8C4 8.55 4.45 9 5 9H7V11C7 11.55 7.45 12 8 12C8.55 12 9 11.55 9 11V9H11C11.55 9 12 8.55 12 8C12 7.45 11.55 7 11 7Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionSmallPlusIcon = convertIcon(Icon, "action-small-plus");
export default ActionSmallPlusIcon;
