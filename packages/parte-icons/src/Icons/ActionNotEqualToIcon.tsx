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
        d="M7.5802 4.99999L8.01942 2.80388C8.12773 2.26232 8.65456 1.9111 9.19612 2.01941C9.73768 2.12773 10.0889 2.65455 9.98058 3.19611L9.6198 4.99999H13C13.5523 4.99999 14 5.44771 14 5.99999C14 6.55228 13.5523 6.99999 13 6.99999H9.2198L8.8198 8.99999H13C13.5523 8.99999 14 9.44771 14 9.99999C14 10.5523 13.5523 11 13 11H8.4198L7.98058 13.1961C7.87227 13.7377 7.34544 14.0889 6.80388 13.9806C6.26232 13.8723 5.91111 13.3454 6.01942 12.8039L6.3802 11H3C2.44772 11 2 10.5523 2 9.99999C2 9.44771 2.44772 8.99999 3 8.99999H6.7802L7.1802 6.99999H3C2.44772 6.99999 2 6.55228 2 5.99999C2 5.44771 2.44772 4.99999 3 4.99999H7.5802Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionNotEqualToIcon = convertIcon(Icon, "action-not-equal-to");
export default ActionNotEqualToIcon;
