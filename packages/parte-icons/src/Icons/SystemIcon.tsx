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
        d="M6 2H2.66667C2.29848 2 2 2.29848 2 2.66667V6C2 6.3682 2.29848 6.66667 2.66667 6.66667H6C6.3682 6.66667 6.66667 6.3682 6.66667 6V2.66667C6.66667 2.29848 6.3682 2 6 2Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6 9.33331H2.66667C2.29848 9.33331 2 9.63178 2 9.99998V13.3333C2 13.7015 2.29848 14 2.66667 14H6C6.3682 14 6.66667 13.7015 6.66667 13.3333V9.99998C6.66667 9.63178 6.3682 9.33331 6 9.33331Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.6663 6.66667C12.955 6.66667 13.9997 5.622 13.9997 4.33333C13.9997 3.04467 12.955 2 11.6663 2C10.3777 2 9.33301 3.04467 9.33301 4.33333C9.33301 5.622 10.3777 6.66667 11.6663 6.66667Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 9.33331H9.99967C9.63147 9.33331 9.33301 9.63178 9.33301 9.99998V13.3333C9.33301 13.7015 9.63147 14 9.99967 14H13.333C13.7012 14 13.9997 13.7015 13.9997 13.3333V9.99998C13.9997 9.63178 13.7012 9.33331 13.333 9.33331Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const SystemIcon = convertIcon(Icon, "system");
export default SystemIcon;
