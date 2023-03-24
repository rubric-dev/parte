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
        d="m13.71 4.29-4-4A.997.997 0 0 0 9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5c0-.28-.11-.53-.29-.71ZM7 6h2v2H7V6ZM4 6h2v2H4V6Zm2 8H4v-2h2v2Zm3 0H7v-2h2v2Zm3 0h-2v-2h2v2Zm0-3H4V9h8v2Zm0-3h-2V6h2v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaSimCardIcon = convertIcon(Icon, "media-sim-card");
export default MediaSimCardIcon;
