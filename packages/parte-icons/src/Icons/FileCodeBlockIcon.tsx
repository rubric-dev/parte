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
        d="M15 3h-2V2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H7V2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1Zm-8.29 8.29a1.003 1.003 0 0 1-1.42 1.42l-3-3A.997.997 0 0 1 2 9c0-.28.11-.53.29-.71l3-3a1.003 1.003 0 0 1 1.42 1.42L4.41 9l2.3 2.29Zm7-1.58-3 3a1.003 1.003 0 0 1-1.42-1.42L11.59 9l-2.3-2.29a1.003 1.003 0 0 1 1.42-1.42l3 3c.18.18.29.43.29.71 0 .28-.11.53-.29.71Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileCodeBlockIcon = convertIcon(Icon, "file-code-block");
export default FileCodeBlockIcon;
