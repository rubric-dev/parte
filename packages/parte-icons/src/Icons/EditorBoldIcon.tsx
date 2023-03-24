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
        d="M11.7 7c.2-.4.3-1 .3-1.5V5c0-.1 0-.2-.1-.3v-.1C11.4 3.1 10.1 2 8.5 2H4c-.5 0-1 .4-1 1v10c0 .5.4 1 1 1h5c2.2 0 4-1.8 4-4 0-1.2-.5-2.3-1.3-3ZM6 5h2c.6 0 1 .4 1 1s-.4 1-1 1H6V5Zm3 6H6V9h3c.6 0 1 .4 1 1s-.4 1-1 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const EditorBoldIcon = convertIcon(Icon, "editor-bold");
export default EditorBoldIcon;
