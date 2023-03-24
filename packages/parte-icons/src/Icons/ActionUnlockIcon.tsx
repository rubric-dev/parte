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
        d="M12.2259 0.931763C10.1459 0.931763 8.46117 2.61647 8.46117 4.69647V7.52H1.87294C1.35529 7.52 0.931763 7.94353 0.931763 8.46117V15.0494C0.931763 15.5671 1.35529 15.9906 1.87294 15.9906H13.1671C13.6847 15.9906 14.1082 15.5671 14.1082 15.0494V8.46117C14.1082 7.94353 13.6847 7.52 13.1671 7.52H10.3435V4.69647C10.3435 3.66117 11.1906 2.81412 12.2259 2.81412C13.2612 2.81412 14.1082 3.66117 14.1082 4.69647V5.63765C14.1082 6.15529 14.5318 6.57882 15.0494 6.57882C15.5671 6.57882 15.9906 6.15529 15.9906 5.63765V4.69647C15.9906 2.61647 14.3059 0.931763 12.2259 0.931763Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionUnlockIcon = convertIcon(Icon, "action-unlock");
export default ActionUnlockIcon;
