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
        d="M2 10v5c0 .55.45 1 1 1h3v-5h4v5h3c.55 0 1-.45 1-1v-5L8 4l-6 6Zm13.71-2.71L14 5.59V2c0-.55-.45-1-1-1s-1 .45-1 1v1.59L8.71.29A.997.997 0 0 0 8 0c-.28 0-.53.11-.71.29l-7 7a1.003 1.003 0 0 0 1.42 1.42L8 2.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousHomeIcon = convertIcon(Icon, "miscellaneous-home");
export default MiscellaneousHomeIcon;
