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
        d="M14.033 2.918a.95.95 0 0 0-.866-.574H3.755a.94.94 0 0 0-.866.574L.932 7.482v5.215c0 .517.423.94.94.94H15.05a.944.944 0 0 0 .942-.94V7.482l-1.958-4.564ZM12.226 7.99a.944.944 0 0 0-.941.94v.942H5.638v-.941a.944.944 0 0 0-.942-.941H2.767l1.61-3.765h8.169l1.61 3.765h-1.93Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileInboxIcon = convertIcon(Icon, "file-inbox");
export default FileInboxIcon;
