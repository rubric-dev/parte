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
        d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8ZM7 3h2v2H7V3Zm3 10H6v-1h1V7H6V6h3v6h1v1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceInfoSignIcon = convertIcon(Icon, "interface-info-sign");
export default InterfaceInfoSignIcon;
