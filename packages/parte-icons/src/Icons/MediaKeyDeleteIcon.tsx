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
        d="m15.71 7.29-5-5A.997.997 0 0 0 10 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h9c.28 0 .53-.11.71-.29l5-5c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71Zm-7 2a1.003 1.003 0 0 1-1.42 1.42L6 9.41 4.71 10.7c-.18.19-.43.3-.71.3a1.003 1.003 0 0 1-.71-1.71L4.59 8l-1.3-1.29a1.003 1.003 0 0 1 1.42-1.42L6 6.59 7.29 5.3c.18-.19.43-.3.71-.3a1.003 1.003 0 0 1 .71 1.71L7.41 8l1.3 1.29Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaKeyDeleteIcon = convertIcon(Icon, "media-key-delete");
export default MediaKeyDeleteIcon;
