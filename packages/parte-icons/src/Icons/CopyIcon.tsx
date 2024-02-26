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
      <g clipPath="url(#clip0_5353_29760)">
        <path
          d="M4.33301 4.14383V2.60413C4.33301 2.08636 4.75274 1.66663 5.27051 1.66663H13.3955C13.9133 1.66663 14.333 2.08636 14.333 2.60413V10.7291C14.333 11.2469 13.9133 11.6666 13.3955 11.6666H11.8384"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7295 4.33331H2.60449C2.08673 4.33331 1.66699 4.75305 1.66699 5.27081V13.3958C1.66699 13.9136 2.08673 14.3333 2.60449 14.3333H10.7295C11.2473 14.3333 11.667 13.9136 11.667 13.3958V5.27081C11.667 4.75305 11.2473 4.33331 10.7295 4.33331Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5353_29760">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
const CopyIcon = convertIcon(Icon, "copy");
export default CopyIcon;
