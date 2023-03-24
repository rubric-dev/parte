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
        d="M14 3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1h12V3Zm-2-3H4c-.55 0-1 .45-1 1h10c0-.55-.45-1-1-1Zm3 5H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1Zm-3 6c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9h1v2h6V9h1v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceSegmentedControlIcon = convertIcon(
  Icon,
  "interface-segmented-control"
);
export default InterfaceSegmentedControlIcon;
