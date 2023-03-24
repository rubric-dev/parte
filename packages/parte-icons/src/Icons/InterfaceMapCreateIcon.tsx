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
        d="M14 6.82v6.32l-2.94-1.96a.219.219 0 0 1-.05-.03V6.22c-.08-.07-.15-.16-.22-.24-.28-.02-.54-.08-.79-.16v5.32s-.01 0-.01.01L6 13.53V4.86s.01 0 .01-.01l2.05-1.23C8.02 3.42 8 3.21 8 3c0-.98.47-1.84 1.2-2.39l-3.67 2.2L1.56.17A1.003 1.003 0 0 0 0 1v11c0 .35.18.65.45.83l4.49 3a.975.975 0 0 0 1.07.02l4.46-2.67 3.97 2.65A1.003 1.003 0 0 0 16 15V5.82c-.25.09-.52.14-.8.16-.33.36-.73.67-1.2.84Zm-9 6.64-3-2v-8.6l2.94 1.96c.02.02.04.03.06.04v8.6ZM11 4h1v1c0 .55.45 1 1 1s1-.45 1-1V4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceMapCreateIcon = convertIcon(Icon, "interface-map-create");
export default InterfaceMapCreateIcon;
