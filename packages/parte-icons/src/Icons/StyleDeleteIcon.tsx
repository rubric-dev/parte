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
      <g clip-path="url(#clip0_462_5519)">
        <path
          d="M3 3.33337V14.6667H13V3.33337H3Z"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linejoin="round"
        />
        <path
          d="M6.66663 6.66663V11"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.33337 6.66663V11"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.33337 3.33337H14.6667"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33337 3.33337L6.42971 1.33337H9.59241L10.6667 3.33337H5.33337Z"
          stroke="#8F95B2"
          stroke-width="1.25"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_462_5519">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

const StyleDeleteIcon = convertIcon(Icon, "style-delete");
export default StyleDeleteIcon;
