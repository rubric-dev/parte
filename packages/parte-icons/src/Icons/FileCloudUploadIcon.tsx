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
        d="M8.71 7.29A.997.997 0 0 0 8 7c-.28 0-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L7 10.41V15c0 .55.45 1 1 1s1-.45 1-1v-4.59l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3ZM12 4c-.03 0-.07 0-.1.01A5 5 0 0 0 2 5c0 .11.01.22.02.33a3.495 3.495 0 0 0 .07 6.37c-.05-.23-.09-.46-.09-.7 0-.83.34-1.58.88-2.12l3-3a2.993 2.993 0 0 1 4.24 0l3 3c.54.54.88 1.29.88 2.12 0 .16-.02.32-.05.47C15.17 10.78 16 9.5 16 8c0-2.21-1.79-4-4-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileCloudUploadIcon = convertIcon(Icon, "file-cloud-upload");
export default FileCloudUploadIcon;
