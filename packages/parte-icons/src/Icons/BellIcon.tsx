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
        d="M6.23597 14C6.70604 14.415 7.32357 14.6667 7.99984 14.6667C8.67617 14.6667 9.29364 14.415 9.76371 14M11.9998 5.33337C11.9998 4.27251 11.5784 3.25509 10.8283 2.50495C10.0781 1.7548 9.06071 1.33337 7.99984 1.33337C6.93897 1.33337 5.92157 1.7548 5.17143 2.50495C4.42128 3.25509 3.99985 4.27251 3.99985 5.33337C3.99985 7.39351 3.48017 8.80404 2.89963 9.73697C2.40994 10.524 2.16509 10.9174 2.17407 11.0272C2.18401 11.1488 2.20976 11.1951 2.3077 11.2678C2.39616 11.3334 2.79491 11.3334 3.59242 11.3334H12.4073C13.2048 11.3334 13.6036 11.3334 13.692 11.2678C13.79 11.1951 13.8157 11.1488 13.8256 11.0272C13.8346 10.9174 13.5898 10.524 13.1001 9.73697C12.5195 8.80404 11.9998 7.39351 11.9998 5.33337Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
const BellIcon = convertIcon(Icon, "bell");
export default BellIcon;
