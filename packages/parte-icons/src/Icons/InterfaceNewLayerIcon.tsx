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
        d="m13.982 6.272 1.518.868-.01.01c.3.17.51.48.51.85s-.21.68-.51.85l.01.01-7 4-.01-.01A.94.94 0 0 1 8 13a.94.94 0 0 1-.49-.15l-.01.01-7-4 .01-.01A.977.977 0 0 1 0 8c0-.37.21-.68.51-.86L.5 7.13l7-4 .01.02A.94.94 0 0 1 8 3c.086 0 .168.014.246.038a2 2 0 1 0 5.735 3.234ZM14 3c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V5h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V2c0-.55.45-1 1-1s1 .45 1 1v1h1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceNewLayerIcon = convertIcon(Icon, "interface-new-layer");
export default InterfaceNewLayerIcon;
