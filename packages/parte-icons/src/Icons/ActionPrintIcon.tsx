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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.02C12 1.47 11.55 1.02 11 1.02H5C4.45 1.02 4 1.47 4 2.02V3.02H12V2.02ZM15 4.02H1C0.45 4.02 0 4.47 0 5.02V11.02C0 11.57 0.45 12.02 1 12.02H2V9.02H14V12.02H15C15.55 12.02 16 11.57 16 11.02V5.02C16 4.46 15.55 4.02 15 4.02ZM14 7.02H12V6.02H14V7.02ZM11 13.02H5V10.02H3V14.02C3 14.57 3.45 15.02 4 15.02H12C12.55 15.02 13 14.57 13 14.02V10.02H11V13.02Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionPrintIcon = convertIcon(Icon, "action-print");
export default ActionPrintIcon;
