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
      <g clip-path="url(#clip0_367_5604)">
        <path
          d="M14.6667 1.33337H1.33337V4.00004H3.33337V14.6667H12.6667V4.00004H14.6667V1.33337Z"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33337 10.6666H12.6667"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33337 8H12.6667"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 1.33337C10 2.43794 9.10457 3.33337 8 3.33337C6.89543 3.33337 6 2.43794 6 1.33337"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_367_5604">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const StyleClothesShortSleeveIcon = convertIcon(
  Icon,
  "style-clothes-short-sleeve"
);
export default StyleClothesShortSleeveIcon;
