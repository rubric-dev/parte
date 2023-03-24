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
        d="M11 7H5C4.45 7 4 7.45 4 8C4 8.55 4.45 9 5 9H11C11.55 9 12 8.55 12 8C12 7.45 11.55 7 11 7Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionSmallMinusIcon = convertIcon(Icon, "action-small-minus");
export default ActionSmallMinusIcon;
