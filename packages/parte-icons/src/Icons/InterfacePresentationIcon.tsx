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
        d="M15 1H9c0-.55-.45-1-1-1S7 .45 7 1H1c-.55 0-1 .45-1 1s.45 1 1 1v8c0 .55.45 1 1 1h3.59L3.3 14.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L7 13.41V15c0 .55.45 1 1 1s1-.45 1-1v-1.59l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L10.41 12H14c.55 0 1-.45 1-1V3c.55 0 1-.45 1-1s-.45-1-1-1Zm-2 9H3V3h10v7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfacePresentationIcon = convertIcon(Icon, "interface-presentation");
export default InterfacePresentationIcon;
