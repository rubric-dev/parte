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
        d="M0 8c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8zm11.29-2.71a1.003 1.003 0 011.42 1.42l-5 5c-.18.18-.43.29-.71.29-.28 0-.53-.11-.71-.29l-3-3a1.003 1.003 0 011.42-1.42L7 9.59l4.29-4.3z"
        fill="#52BD94"
      />
    </svg>
  );
}

const AlertSuccessIcon = convertIcon(Icon, "alert-success");
export default AlertSuccessIcon;
