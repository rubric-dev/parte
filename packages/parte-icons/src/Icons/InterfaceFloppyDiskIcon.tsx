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
        d="m15.71 2.29-2-2A.997.997 0 0 0 13 0h-1v6H4V0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.28-.11-.53-.29-.71ZM14 15H2V9c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v6ZM11 1H9v4h2V1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceFloppyDiskIcon = convertIcon(Icon, "interface-floppy-disk");
export default InterfaceFloppyDiskIcon;
