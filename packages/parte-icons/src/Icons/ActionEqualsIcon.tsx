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
        d="M3 5H13C13.5523 5 14 5.44772 14 6C14 6.55228 13.5523 7 13 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5ZM3 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionEqualsIcon = convertIcon(Icon, "action-equals");
export default ActionEqualsIcon;
