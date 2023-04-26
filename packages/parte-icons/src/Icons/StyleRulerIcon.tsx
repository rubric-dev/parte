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
      <g clip-path="url(#clip0_367_5605)">
        <path
          d="M14.6667 4.66671L11.3334 1.33337L10.0834 2.58337L8.83337 3.83337L6.33337 6.33337L3.83337 8.83337L2.58337 10.0834L1.33337 11.3334L4.66671 14.6667L14.6667 4.66671Z"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 9.66663L4.33333 11"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.66663 8L6.66663 10"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.33337 6.33337L7.66671 7.66671"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 4.66663L10 6.66663"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.66663 3L11 4.33333"
          stroke="currentcolor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_367_5605">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const StyleRulerIcon = convertIcon(Icon, "style-ruler");
export default StyleRulerIcon;
