import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2 0.01H11.05C11.03 0.01 11.02 0 11 0H5C4.98 0 4.97 0.01 4.95 0.01H4.8C4.36 0.01 4 0.38 4 0.83V15.58C4 16.03 4.25 16.14 4.57 15.82L7.44 12.88C7.75 12.56 8.26 12.56 8.57 12.88L11.44 15.82C11.75 16.14 12.01 16.03 12.01 15.58V0.83C12 0.38 11.64 0.01 11.2 0.01Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionBookmarkIcon = convertIcon(Icon, "action-bookmark");
export default ActionBookmarkIcon;
