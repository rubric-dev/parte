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
        d="M3.8 11.267h1v-1h-1v1Zm1.596 3.462.707.707h.001l-.708-.707Zm3.453-3.462v-1h-.415l-.293.293.708.707ZM14.067 0H1.933v2h12.134V0ZM1.933 0A1.936 1.936 0 0 0 0 1.933h2a.07.07 0 0 1-.019.048.07.07 0 0 1-.048.019V0ZM0 1.933v8.4h2v-8.4H0Zm0 8.4c0 1.066.868 1.934 1.933 1.934v-2a.07.07 0 0 1 .048.018.07.07 0 0 1 .019.048H0Zm1.933 1.934H3.8v-2H1.933v2Zm.867-1v2.8h2v-2.8h-2Zm0 2.8C2.8 15.132 3.668 16 4.733 16v-2a.07.07 0 0 1 .048.019.07.07 0 0 1 .019.048h-2ZM4.733 16c.53 0 1.017-.21 1.37-.564L4.69 14.022a.083.083 0 0 1 .026-.017.054.054 0 0 1 .018-.005v2Zm1.371-.565 3.453-3.462-1.416-1.413-3.453 3.463 1.416 1.412Zm2.745-3.168h5.218v-2H8.849v2Zm5.218 0A1.936 1.936 0 0 0 16 10.333h-2a.07.07 0 0 1 .019-.048.07.07 0 0 1 .048-.018v2ZM16 10.333v-8.4h-2v8.4h2Zm0-8.4A1.936 1.936 0 0 0 14.067 0v2a.07.07 0 0 1-.048-.019.07.07 0 0 1-.019-.048h2Z"
      />
    </svg>
  );
}
const InterfaceMessageIcon = convertIcon(Icon, "interface-message");
export default InterfaceMessageIcon;
