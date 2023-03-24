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
        d="M13 7H3C2.45 7 2 7.45 2 8C2 8.55 2.45 9 3 9H13C13.55 9 14 8.55 14 8C14 7.45 13.55 7 13 7Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionMinusIcon = convertIcon(Icon, "action-minus");
export default ActionMinusIcon;
