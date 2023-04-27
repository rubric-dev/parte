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
        d="M3.66667 5.33333C4.58714 5.33333 5.33333 4.58714 5.33333 3.66667C5.33333 2.74619 4.58714 2 3.66667 2C2.74619 2 2 2.74619 2 3.66667C2 4.58714 2.74619 5.33333 3.66667 5.33333Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3333 14C13.2538 14 14 13.2538 14 12.3333C14 11.4128 13.2538 10.6666 12.3333 10.6666C11.4128 10.6666 10.6666 11.4128 10.6666 12.3333C10.6666 13.2538 11.4128 14 12.3333 14Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2L2 14"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StylePercentageIcon = convertIcon(Icon, "style-percentage");
export default StylePercentageIcon;
