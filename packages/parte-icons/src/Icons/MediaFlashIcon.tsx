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
        d="M4 8c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1Zm4-4c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1S7 .45 7 1v2c0 .55.45 1 1 1ZM3.79 5.21a1.003 1.003 0 0 0 1.42-1.42l-1.5-1.5a1.003 1.003 0 0 0-1.42 1.42l1.5 1.5Zm.71 5.29c-.28 0-.53.11-.71.29l-1.5 1.5a1.003 1.003 0 0 0 1.42 1.42l1.5-1.5a1.003 1.003 0 0 0-.71-1.71Zm7-5c.28 0 .53-.11.71-.29l1.5-1.5a1.003 1.003 0 0 0-1.42-1.42l-1.5 1.5a1.003 1.003 0 0 0 .71 1.71Zm.71 5.29a1.003 1.003 0 0 0-1.42 1.42l1.5 1.5a1.003 1.003 0 0 0 1.42-1.42l-1.5-1.5ZM15 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1ZM8 5C6.34 5 5 6.34 5 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm0 3c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaFlashIcon = convertIcon(Icon, "media-flash");
export default MediaFlashIcon;
