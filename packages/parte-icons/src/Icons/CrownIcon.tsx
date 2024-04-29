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
        d="M3.49963 13.3333L1.33301 5.66667L4.66634 7.33334L7.99967 2.66667L11.333 7.33334L14.6663 5.66667L12.4996 13.3333H3.49963Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const CrownIcon = convertIcon(Icon, "crown");
export default CrownIcon;
