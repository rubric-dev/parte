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
        d="M13.65 6.19c-.34 0-.64.11-.88.29-.17-.48-.68-.84-1.29-.84-.41 0-.78.16-1.03.42-.23-.37-.67-.63-1.19-.63-.57 0-1.05.31-1.25.74L8 5.55V1.5C8 .67 7.33 0 6.5 0S5 .67 5 1.5v6.61c-.58-.41-1.55-1.21-2.48-1.3C.96 6.67.7 7.88 1.28 8.13c1.54.67 2.99 2.68 3.7 3.95C5.89 14.05 6.07 16 9.86 16c2.09 0 3.43-.61 4.22-2.12.64-1.24.92-3.09.92-5.71v-.79c0-.65-.6-1.19-1.35-1.19Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceHandUpIcon = convertIcon(Icon, "interface-hand-up");
export default InterfaceHandUpIcon;
