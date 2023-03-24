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
        d="M14.9 11c.6 0 1 .5 1 1 0 .257-.074.44-.22.614l-.08.086-3 3c-.2.2-.4.3-.7.3-.5 0-1-.4-1-1 0-.257.073-.44.22-.614l.08-.086 3-3c.2-.2.4-.3.7-.3ZM1.3.1l6.734 2.45a3.005 3.005 0 0 0 2.095 3.322 3.005 3.005 0 0 0 3.401 2.081L13.9 9.8v.2c0 .257-.074.44-.22.614l-.08.086-3 3c-.171.171-.343.27-.577.294L9.9 14h-.2l-5-1-.1-.01c-.231-.05-.45-.26-.56-.49L4 12.4l-4-11 .3-.3 5.8 5.8c-.1.2-.2.4-.2.6 0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.5S8.2 6 7.4 6c-.16 0-.32.064-.48.14l-.12.06L1 .4l.3-.3ZM13 0c.55 0 1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .503-.376.922-.861.99l-.013.002A.997.997 0 0 1 13 6l.097-.006-.027.004a.98.98 0 0 1-.037.001L13 6c-.55 0-1-.45-1-1V4h-1a.993.993 0 0 1-.855-.482.97.97 0 0 1-.105-.238A1.003 1.003 0 0 1 11 2h1V1c0-.55.45-1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceNewDrawingIcon = convertIcon(Icon, "interface-new-drawing");
export default InterfaceNewDrawingIcon;
