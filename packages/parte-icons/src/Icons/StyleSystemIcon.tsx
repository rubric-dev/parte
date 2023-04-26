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
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M6 9.33337H2.66667C2.29848 9.33337 2 9.63184 2 10V13.3334C2 13.7016 2.29848 14 2.66667 14H6C6.3682 14 6.66667 13.7016 6.66667 13.3334V10C6.66667 9.63184 6.3682 9.33337 6 9.33337Z"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M11.6667 6.66667C12.9554 6.66667 14 5.622 14 4.33333C14 3.04467 12.9554 2 11.6667 2C10.378 2 9.33337 3.04467 9.33337 4.33333C9.33337 5.622 10.378 6.66667 11.6667 6.66667Z"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M13.3334 9.33337H10C9.63184 9.33337 9.33337 9.63184 9.33337 10V13.3334C9.33337 13.7016 9.63184 14 10 14H13.3334C13.7016 14 14 13.7016 14 13.3334V10C14 9.63184 13.7016 9.33337 13.3334 9.33337Z"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
    </svg>
  );
}

const StyleSystemIcon = convertIcon(Icon, "style-system");
export default StyleSystemIcon;
