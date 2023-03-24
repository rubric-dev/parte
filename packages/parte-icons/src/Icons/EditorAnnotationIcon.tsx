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
        d="M15.52 2.77c.3-.29.48-.7.48-1.15C16 .73 15.27 0 14.38 0c-.45 0-.85.18-1.15.48l-1.34 1.34 2.3 2.3 1.33-1.35ZM7.4 10.9l6.21-6.21-2.3-2.3L5.1 8.6l2.3 2.3ZM14 14H2V2h6.34l2-2H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5.66l-2 2V14ZM3 13l3.58-1.29-2.29-2.27L3 13Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const EditorAnnotationIcon = convertIcon(Icon, "editor-annotation");
export default EditorAnnotationIcon;
