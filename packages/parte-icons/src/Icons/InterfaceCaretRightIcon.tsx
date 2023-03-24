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
        d="M11 8c0-.15-.07-.28-.17-.37l-4-3.5A.495.495 0 0 0 6 4.5v7a.495.495 0 0 0 .83.37l4-3.5c.1-.09.17-.22.17-.37Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceCaretRightIcon = convertIcon(Icon, "interface-caret-right");
export default InterfaceCaretRightIcon;
