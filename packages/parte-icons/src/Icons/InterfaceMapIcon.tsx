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
        d="m15.55 3.17-4.49-3A.975.975 0 0 0 9.99.15L5.53 2.82 1.56.17A1.003 1.003 0 0 0 0 1v11c0 .35.18.65.45.83l4.49 3a.975.975 0 0 0 1.07.02l4.46-2.67 3.97 2.65A1.003 1.003 0 0 0 16 15V4c0-.35-.18-.65-.45-.83ZM5 13.46l-3-2v-8.6l2.94 1.96c.02.02.04.03.06.04v8.6Zm5-2.32s-.01 0-.01.01L6 13.53V4.86s.01 0 .01-.01L10 2.47v8.67Zm4 1.99-2.94-1.96a.219.219 0 0 1-.05-.03v-8.6l3 2v8.59H14Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceMapIcon = convertIcon(Icon, "interface-map");
export default InterfaceMapIcon;
