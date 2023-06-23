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
        d="M15.845 13.5l.01-.01-6.996-12-.01.01C8.68 1.2 8.37 1 8 1c-.369 0-.669.2-.849.5l-.01-.01-6.995 12 .01.01c-.09.15-.15.31-.15.5 0 .55.45 1 1 1h13.99c.55 0 1-.45 1-1 0-.19-.06-.35-.15-.5zm-6.846-.51H7.001v-2h1.998v2zm-1.998-3h1.998v-5H7.001v5z"
        fill="currentcolor"
      />
    </svg>
  );
}

const AlertWarningIcon = convertIcon(Icon, "alert-warning");
export default AlertWarningIcon;
