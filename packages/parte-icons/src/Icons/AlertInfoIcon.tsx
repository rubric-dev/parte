import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 3v2H7V3h2zm-3 9v1h4v-1H9V6H6v1h1v5H6z"
        fill="currentcolor"
      />
    </svg>
  );
}

const AlertInfoIcon = convertIcon(Icon, "alert-info");
export default AlertInfoIcon;
