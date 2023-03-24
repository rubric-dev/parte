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
        d="M12 8c0-.35-.19-.64-.46-.82l.01-.02-6-4-.01.02A.969.969 0 0 0 5 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .21 0 .39-.08.54-.18l.01.02 6-4-.01-.02c.27-.18.46-.47.46-.82Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaPlayIcon = convertIcon(Icon, "media-play");
export default MediaPlayIcon;
