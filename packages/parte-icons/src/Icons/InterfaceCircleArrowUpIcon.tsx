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
        d="M8.71 4.29A.997.997 0 0 0 8 4c-.28 0-.53.11-.71.29l-3 3a1.003 1.003 0 0 0 1.42 1.42L7 7.41V11c0 .55.45 1 1 1s1-.45 1-1V7.41l1.29 1.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71l-3-3ZM8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceCircleArrowUpIcon = convertIcon(
  Icon,
  "interface-circle-arrow-up"
);
export default InterfaceCircleArrowUpIcon;
