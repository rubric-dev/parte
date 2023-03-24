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
        d="m2 6 3 2 3-4 3 4 3-2-1 6H3L2 6Zm6-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM1 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm14 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM3 13h10v2H3v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousCrownIcon = convertIcon(Icon, "miscellaneous-crown");
export default MiscellaneousCrownIcon;
