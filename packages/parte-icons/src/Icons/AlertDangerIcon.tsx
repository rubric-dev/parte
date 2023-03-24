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
        d="M8 .005A7.993 7.993 0 00.005 8 7.993 7.993 0 008 15.995 7.993 7.993 0 0015.995 8 7.993 7.993 0 008 .005zM7 12.997v-1.999h2v1.999H7zm0-9.994V10h2V3.003H7z"
        fill="#D14343"
      />
    </svg>
  );
}

const AlertDangerIcon = convertIcon(Icon, "alert-danger");
export default AlertDangerIcon;
