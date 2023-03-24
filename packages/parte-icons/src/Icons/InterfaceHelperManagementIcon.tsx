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
        d="M13 5h-2v2h2V5Zm0 6h-2v2h2v-2Zm0-3h-2v2h2V8Zm2-8H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm-1 14H2V2h12v12Zm-7-3H5v2h2v-2Zm3 0H8v2h2v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceHelperManagementIcon = convertIcon(
  Icon,
  "interface-helper-management"
);
export default InterfaceHelperManagementIcon;
