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
        d="M6 1c0-.55.44-1 1-1 .55 0 1 .46 1 1v10c0 .55-.44 1-1 1-.55 0-1-.45-1-1V7H2v4c0 .55-.44 1-1 1-.55 0-1-.45-1-1V1c0-.55.44-1 1-1 .55 0 1 .45 1 1v4h4V1Zm7.81 7.61c.13-.17.21-.38.25-.61H15v8h-1.26v-5.65H12V9.32c.25 0 .48-.03.71-.07.23-.05.44-.12.62-.23.19-.11.35-.24.48-.41Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const EditorHeaderOneIcon = convertIcon(Icon, "editor-header-one");
export default EditorHeaderOneIcon;
