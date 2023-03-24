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
        d="M12 6c-.03 0-.07 0-.1.01A5 5 0 0 0 2 7c0 .11.01.22.02.33A3.51 3.51 0 0 0 0 10.5C0 12.43 1.57 14 3.5 14H12c2.21 0 4-1.79 4-4s-1.79-4-4-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileCloudIcon = convertIcon(Icon, "file-cloud");
export default FileCloudIcon;
