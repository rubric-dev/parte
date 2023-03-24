import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M8 0 0 16h16L8 0ZM7 5l5 10H2L7 5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousDeltaIcon = convertIcon(Icon, "miscellaneous-delta");
export default MiscellaneousDeltaIcon;
