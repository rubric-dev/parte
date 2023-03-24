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
        d="M9.12 11.07L11.12 9.05L11.83 9.76L15.83 5.72L10.17 0L6.17 4.04L6.88 4.75L4.88 6.77L9.12 11.07ZM2 12.97H6C6.28 12.97 6.53 12.86 6.71 12.67L7.71 11.66L4.29 8.21L1.29 11.24C1.11 11.42 1 11.68 1 11.96C1 12.51 1.45 12.97 2 12.97ZM15 13.98H1C0.45 13.98 0 14.43 0 14.99C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 14.99C16 14.43 15.55 13.98 15 13.98Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionHighlightIcon = convertIcon(Icon, "action-highlight");
export default ActionHighlightIcon;
