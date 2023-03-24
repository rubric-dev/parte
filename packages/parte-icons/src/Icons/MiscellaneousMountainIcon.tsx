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
        d="M16 13H3l6-9h1l2 2h1l3 7Zm-2.5-3.5-1-2.5h-1l-2-2-3 4.5L9 8l1 1 1-1 2.5 1.5ZM5.94 7l-4.122 6H0l5-6h.94Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousMountainIcon = convertIcon(Icon, "miscellaneous-mountain");
export default MiscellaneousMountainIcon;
