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
        d="M8.00011 3.87304C8.69774 3.87304 9.26327 3.30453 9.26327 2.60321C9.26327 1.9019 8.69774 1.33337 8.00011 1.33337C7.30247 1.33337 6.73694 1.9019 6.73694 2.60321C6.73694 3.30453 7.30247 3.87304 8.00011 3.87304Z"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M3.26316 13.3969C3.96077 13.3969 4.5263 12.8283 4.5263 12.127C4.5263 11.4257 3.96077 10.8572 3.26316 10.8572C2.56554 10.8572 2 11.4257 2 12.127C2 12.8283 2.56554 13.3969 3.26316 13.3969Z"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M12.7368 13.3969C13.4344 13.3969 13.9999 12.8283 13.9999 12.127C13.9999 11.4257 13.4344 10.8572 12.7368 10.8572C12.0392 10.8572 11.4736 11.4257 11.4736 12.127C11.4736 12.8283 12.0392 13.3969 12.7368 13.3969Z"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M11.0475 3.43811C12.8146 4.48768 13.9999 6.42218 13.9999 8.63498C13.9999 8.82724 13.991 9.01744 13.9735 9.20511"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.338 14.1917C9.61951 14.4975 8.82944 14.6667 8.00004 14.6667C7.17068 14.6667 6.38061 14.4975 5.66211 14.1917"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.02645 9.20511C2.00895 9.01744 2 8.82724 2 8.63498C2 6.42218 3.1853 4.48768 4.95243 3.43811"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

const StyleRingIcon = convertIcon(Icon, "style-ring");
export default StyleRingIcon;
