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
        d="M16.9 13.41c-.06-.06-3.37-2-3.48-2.05a.794.794 0 0 0-.32-.08c-.15 0-.34.11-.57.32-.23.22-.94 1.19-1.15 1.4-.21.22-.38.32-.52.32-.07 0-.15-.02-.25-.06-.1-.04-1.16-.58-3.36-2.52-2.2-1.93-2.49-3.2-2.5-3.55 0-.14.11-.31.32-.52.22-.21.45-.41.7-.6.25-.19.49-.4.7-.62.22-.23.32-.42.32-.57 0-.11-.03-.21-.08-.32-.05-.1-2.05-3.41-2.12-3.48-.15-.15-.74-.08-1.04.08C1.16 2.46.97 4.2 1 4.89c.04.71.49 4.46 4.16 7.95C9.72 17.17 12.89 17 13.1 17c.69 0 2.82-.38 3.72-2.55.13-.32.25-.87.08-1.04Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaPhoneIcon = convertIcon(Icon, "media-phone");
export default MediaPhoneIcon;
