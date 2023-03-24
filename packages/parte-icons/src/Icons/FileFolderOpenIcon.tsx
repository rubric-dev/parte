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
        d="M2.06 6.69c.14-.4.5-.69.94-.69h11V5c0-.55-.45-1-1-1H6.41l-1.7-1.71A.997.997 0 0 0 4 2H1c-.55 0-1 .45-1 1v9.84l2.05-6.15h.01ZM16 8c0-.55-.45-1-1-1H4a.99.99 0 0 0-.94.69l-2 6c-.04.09-.06.2-.06.31 0 .55.45 1 1 1h11c.44 0 .81-.29.94-.69l2-6c.04-.09.06-.2.06-.31Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileFolderOpenIcon = convertIcon(Icon, "file-folder-open");
export default FileFolderOpenIcon;
