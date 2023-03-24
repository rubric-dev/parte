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
        d="M3.5 3.5L5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 4.99485L3.5 3.5ZM10.8 10.7963L12 8L13.2 10.7963L16 12L13.2 13.1931L12 16L10.8 13.1931L8 11.9959L10.8 10.7963Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionCleanIcon = convertIcon(Icon, "action-clean");
export default ActionCleanIcon;
