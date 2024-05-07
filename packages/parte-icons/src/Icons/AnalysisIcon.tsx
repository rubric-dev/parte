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
      <g clipPath="url(#clip0_6089_18600)">
        <path
          d="M14.6663 1.66666H1.33301V5.66666H14.6663V1.66666Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M1.33301 13.6767L5.39155 9.57643L7.58465 11.6767L10.2657 9L11.7592 10.456"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.667 5.39062V14.0573"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1.33301 5.39062V10.0573"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4.33887 14.3333H14.667"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5.66699 3.66666H12.667"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3.33301 3.66553H3.66635"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6089_18600">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const AnalysisIcon = convertIcon(Icon, "analysis");
export default AnalysisIcon;
