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
        d="M13 1.5H3C2.44772 1.5 2 1.61193 2 1.75V4.25C2 4.38807 2.44772 4.5 3 4.5H13C13.5523 4.5 14 4.38807 14 4.25V1.75C14 1.61193 13.5523 1.5 13 1.5Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M13 6.5H3C2.44772 6.5 2 6.61193 2 6.75V9.25C2 9.38807 2.44772 9.5 3 9.5H13C13.5523 9.5 14 9.38807 14 9.25V6.75C14 6.61193 13.5523 6.5 13 6.5Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M13 11.5H3C2.44772 11.5 2 11.6119 2 11.75V14.25C2 14.3881 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.3881 14 14.25V11.75C14 11.6119 13.5523 11.5 13 11.5Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const LayoutTwoIcon = convertIcon(Icon, "layout-two-icon");
export default LayoutTwoIcon;
