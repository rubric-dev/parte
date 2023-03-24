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
        d="M10 3C9.08 3 8.24 3.26 7.5 3.69C6.76 3.26 5.92 3 5 3C2.24 3 0 5.24 0 8C0 10.76 2.24 13 5 13C5.92 13 6.76 12.74 7.5 12.31C8.24 12.74 9.08 13 10 13C12.76 13 15 10.76 15 8C15 5.24 12.76 3 10 3ZM5.9 10.85C5.61 10.94 5.31 11 5 11C3.34 11 2 9.66 2 8C2 6.34 3.34 5 5 5C5.31 5 5.61 5.06 5.9 5.15C5.33 5.96 5 6.94 5 8C5 9.06 5.33 10.04 5.9 10.85ZM10 11C9.69 11 9.39 10.94 9.1 10.85C9.67 10.04 10 9.06 10 8C10 6.94 9.67 5.96 9.1 5.15C9.39 5.06 9.69 5 10 5C11.66 5 13 6.34 13 8C13 9.66 11.66 11 10 11Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionIntersectionIcon = convertIcon(Icon, "action-intersection");
export default ActionIntersectionIcon;
