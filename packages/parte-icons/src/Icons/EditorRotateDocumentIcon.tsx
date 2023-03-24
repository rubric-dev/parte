import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12 2h-1.59l.29-.29c.19-.18.3-.43.3-.71A1.003 1.003 0 0 0 9.29.29l-2 2C7.11 2.47 7 2.72 7 3c0 .28.11.53.29.71l2 2a1.003 1.003 0 0 0 1.42-1.42l-.3-.29H12c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V5c0-1.66-1.34-3-3-3ZM5.71 5.29A.997.997 0 0 0 5 5H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V9c0-.28-.11-.53-.29-.71l-3-3ZM7 14H2V7h2v2c0 .55.45 1 1 1h2v4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const EditorRotateDocumentIcon = convertIcon(Icon, "editor-rotate-document");
export default EditorRotateDocumentIcon;
