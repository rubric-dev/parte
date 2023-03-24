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
        d="M13 14h-1l1 2H3l1-2H3c-1.1 0-2-.9-2-2V2C1 .9 4.13 0 8 0s7 .9 7 2v10c0 1.1-.9 2-2 2Zm-2-2h2v-2h-2v2ZM9 7h4V3H9v4Zm-6 5h2v-2H3v2Zm0-5h4V3H3v4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceTrainIcon = convertIcon(Icon, "interface-train");
export default InterfaceTrainIcon;
