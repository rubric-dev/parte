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
        d="M5 2.66C5 4.14 8 8 8 8s3-3.86 3-5.34C10.99 1.2 9.66 0 8 0S5 1.2 5 2.66ZM7 3c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm8 7c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-5Zm-6.5 0H11v3H9v2H8v-5h.5Zm.5 1v1h1v-1H9Zm-3-1v5h1v-5H6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousIpAddressIcon = convertIcon(Icon, "miscellaneous-address");
export default MiscellaneousIpAddressIcon;
