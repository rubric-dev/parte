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
        d="M4 9h8a1.003 1.003 0 0 0 .71-1.71l-4-4A.997.997 0 0 0 8 3c-.28 0-.53.11-.71.29l-4 4A1.003 1.003 0 0 0 4 9Zm8 1H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaEjectIcon = convertIcon(Icon, "media-eject");
export default MediaEjectIcon;
