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
      <g clip-path="url(#clip0_1063_12973)">
        <path
          d="M14.6667 4.66671L8.00004 1.33337L1.33337 4.66671V11.3334L8.00004 14.6667L14.6667 11.3334V4.66671Z"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linejoin="round"
        />
        <path
          d="M1.33337 4.66663L8.00004 7.99996"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 14.6667V8"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.6667 4.66663L8 7.99996"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.3333 3L4.66663 6.33333"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1063_12973">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const StyleAdProductIcon = convertIcon(Icon, "style-ad-product");
export default StyleAdProductIcon;
