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
        d="m13.71 7.29-5-5A.997.997 0 0 0 8 2c-.28 0-.53.11-.71.29l-5 5A1.003 1.003 0 0 0 3 9h2v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h2a1.003 1.003 0 0 0 .71-1.71Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaKeyShiftIcon = convertIcon(Icon, "media-key-shift");
export default MediaKeyShiftIcon;
