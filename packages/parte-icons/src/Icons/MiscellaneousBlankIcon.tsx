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
      <path fill="currentcolor" d="M0 0h16v16H0z" />
    </svg>
  );
}
const MiscellaneousBlankIcon = convertIcon(Icon, "miscellaneous-blank");
export default MiscellaneousBlankIcon;
