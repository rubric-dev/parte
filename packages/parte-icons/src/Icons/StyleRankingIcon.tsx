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
        d="M5.66671 6H1.33337V14H5.66671V6Z"
        stroke="#8F95B2"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99996 2H5.66663V14H9.99996V2Z"
        stroke="#8F95B2"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
      <path
        d="M14.3333 8.66663H10V14H14.3333V8.66663Z"
        stroke="#8F95B2"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

const StyleRankingIcon = convertIcon(Icon, "style-ranking");
export default StyleRankingIcon;
