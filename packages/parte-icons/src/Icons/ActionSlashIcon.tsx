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
        d="M10 2C9.54 2 9.15 2.31 9.04 2.73L6.05 12.69C6.02 12.79 6 12.89 6 13C6 13.55 6.45 14 7 14C7.46 14 7.85 13.69 7.96 13.27L10.95 3.31C10.98 3.21 11 3.11 11 3C11 2.45 10.55 2 10 2Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionSlashIcon = convertIcon(Icon, "action-slash");
export default ActionSlashIcon;
