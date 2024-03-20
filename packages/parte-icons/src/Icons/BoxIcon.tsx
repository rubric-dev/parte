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
        d="M13.3333 4H2.66667C2.29848 4 2 4.29848 2 4.66667V13.3333C2 13.7015 2.29848 14 2.66667 14H13.3333C13.7015 14 14 13.7015 14 13.3333V4.66667C14 4.29848 13.7015 4 13.3333 4Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5.9834 8.00276H9.9834"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 4.33334L4.33333 1.66667H11.6667L14 4.33334"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const BoxIcon = convertIcon(Icon, "Box");
export default BoxIcon;
