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
        d="M1.77499 14.4999L4.60333 14.5L14.9742 4.12907L12.1458 1.30066L1.7749 11.6716L1.77499 14.4999Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M9.31738 4.12903L12.1458 6.95746"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StyleWriteIcon = convertIcon(Icon, "style-write");
export default StyleWriteIcon;
