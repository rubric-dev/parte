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
        d="M6.71 9.29a1.003 1.003 0 0 0-1.42 1.42l2 2a.997.997 0 0 0 1.6-.27h.01l2-4h-.01c.06-.13.11-.28.11-.44 0-.55-.45-1-1-1-.39 0-.72.23-.89.56H9.1l-1.38 2.76-1.01-1.03ZM9 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V5L9 0Zm3 14H4V2h4v4h4v8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileSavedIcon = convertIcon(Icon, "file-saved");
export default FileSavedIcon;
