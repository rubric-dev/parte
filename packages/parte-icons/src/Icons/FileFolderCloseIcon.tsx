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
        d="M.932 13.647c0 .518.423.941.94.941H15.05a.944.944 0 0 0 .942-.94v-6.59H.93v6.59Zm14.117-9.412H7.915l-1.61-1.6a.909.909 0 0 0-.667-.282H1.873a.944.944 0 0 0-.941.941v2.824H15.99v-.942a.944.944 0 0 0-.942-.94Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileFolderCloseIcon = convertIcon(Icon, "file-folder-close");
export default FileFolderCloseIcon;
