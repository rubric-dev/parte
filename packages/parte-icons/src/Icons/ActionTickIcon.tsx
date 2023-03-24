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
        d="M14 3C13.72 3 13.47 3.11 13.29 3.29L6 10.59L2.71 7.29C2.53 7.11 2.28 7 2 7C1.45 7 1 7.45 1 8C1 8.28 1.11 8.53 1.29 8.71L5.29 12.71C5.47 12.89 5.72 13 6 13C6.28 13 6.53 12.89 6.71 12.71L14.71 4.71C14.89 4.53 15 4.28 15 4C15 3.45 14.55 3 14 3Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionTickIcon = convertIcon(Icon, "action-tick");
export default ActionTickIcon;
