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
        d="M13 0H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1ZM6 14H4v-2h2v2Zm0-3H4V9h2v2Zm0-3H4V6h2v2Zm3 6H7v-2h2v2Zm0-3H7V9h2v2Zm0-3H7V6h2v2Zm3 6h-2V9h2v5Zm0-6h-2V6h2v2Zm0-3H4V2h8v3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousCalculatorIcon = convertIcon(
  Icon,
  "miscellaneous-calculator"
);
export default MiscellaneousCalculatorIcon;
