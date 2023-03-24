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
        d="M15 8c0-.32-.16-.59-.38-.77l.01-.01-5-4-.01.01A.987.987 0 0 0 9 3c-.55 0-1 .45-1 1v2.72l-4.38-3.5v.01A.987.987 0 0 0 3 3c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01L8 9.28V12c0 .55.45 1 1 1 .24 0 .44-.09.62-.23l.01.01 5-4-.01-.01c.22-.18.38-.45.38-.77Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaFastForwardIcon = convertIcon(Icon, "media-fast-forward");
export default MediaFastForwardIcon;
