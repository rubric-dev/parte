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
        d="m15.85 13.177.009-.01L9.27 1.873l-.01.01a.91.91 0 0 0-.8-.471.922.922 0 0 0-.8.47l-.01-.01-6.587 11.295.009.01a.892.892 0 0 0-.141.47c0 .518.423.941.94.941H15.05a.944.944 0 0 0 .942-.94.892.892 0 0 0-.142-.471Zm-6.448-.48H7.52v-1.883h1.882v1.883Zm0-2.824H7.52V5.167h1.882v4.706Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceWarningSignIcon = convertIcon(Icon, "interface-warning-sign");
export default InterfaceWarningSignIcon;
