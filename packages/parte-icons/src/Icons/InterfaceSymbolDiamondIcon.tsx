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
        d="M12 8.01c0-.19-.07-.36-.16-.51l.01-.01-3-5-.01.01A.975.975 0 0 0 8 2.01c-.36 0-.67.2-.84.49l-.02-.01-3 5 .02.01c-.09.15-.16.32-.16.51s.07.36.16.51h-.02l3 5 .01-.01c.18.29.49.5.85.5s.67-.2.84-.49l.01.01 3-5-.01-.01c.09-.16.16-.32.16-.51Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceSymbolDiamondIcon = convertIcon(
  Icon,
  "interface-symbol-diamond"
);
export default InterfaceSymbolDiamondIcon;
