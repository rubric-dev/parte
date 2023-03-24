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
        d="M1 8h3.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1Zm14.49-4.01c.31-.32.51-.76.51-1.24C16 1.78 15.22 1 14.25 1c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.45-1.43ZM1 4h7.76l2-2H1c-.55 0-1 .45-1 1s.45 1 1 1Zm0 6c-.55 0-1 .45-1 1 0 .48.35.86.8.96L2.76 10H1Zm9.95-6.43-6.69 6.69 2.47 2.47 6.69-6.69-2.47-2.47Zm4.25 2.47L13.24 8H15c.55 0 1-.45 1-1 0-.48-.35-.86-.8-.96ZM2 15l3.86-1.39-2.46-2.44L2 15Zm13-5h-3.76l-2 2H15c.55 0 1-.45 1-1s-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const EditorManuallyEnteredDataIcon = convertIcon(
  Icon,
  "editor-manually-entered-data"
);
export default EditorManuallyEnteredDataIcon;
