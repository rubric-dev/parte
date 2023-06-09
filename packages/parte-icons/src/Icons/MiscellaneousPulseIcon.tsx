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
        d="M15 8h-1.46l-1.7-2.55-.02.01A.984.984 0 0 0 11 5c-.43 0-.79.27-.93.65h-.01l-1.69 4.51-1.38-8.32h-.02A.989.989 0 0 0 6 1c-.41 0-.77.25-.92.61L2.34 8H1c-.55 0-1 .45-1 1s.45 1 1 1h2c.41 0 .77-.25.92-.61l1.65-3.86 1.44 8.63h.02c.08.47.47.84.97.84.43 0 .79-.27.93-.65h.01l2.31-6.17.92 1.38.02-.01c.17.26.46.45.81.45h2c.55 0 1-.45 1-1s-.45-1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousPulseIcon = convertIcon(Icon, "miscellaneous-pulse");
export default MiscellaneousPulseIcon;
