import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M9 2v1.083A6.002 6.002 0 0 1 8 15 6 6 0 0 1 7 3.083V2H6a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2H9ZM8 5a4 4 0 1 0 4 4H8V5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceSwapHorizontalIcon = convertIcon(
  Icon,
  "interface-swap-horizontal"
);
export default InterfaceSwapHorizontalIcon;
