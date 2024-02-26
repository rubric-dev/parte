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
        d="M8.00033 2.66669V13.3334M12.0003 4.00002L4.00033 12M13.3337 8.00002H2.66699M12.0003 12L4.00033 4.00002"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const AsteriskIcon = convertIcon(Icon, "asterisk");
export default AsteriskIcon;
