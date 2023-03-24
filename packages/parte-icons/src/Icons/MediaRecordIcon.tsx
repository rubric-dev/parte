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
      <circle cx="8" cy="8" r="5" fill="currentcolor" />
    </svg>
  );
}
const MediaRecordIcon = convertIcon(Icon, "media-record");
export default MediaRecordIcon;
