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
        d="M13.3464 7.33337V14H2.67969V7.33337"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.94742 4.5922C1.43757 5.91257 2.42101 7.33333 3.83639 7.33333C4.94095 7.33333 5.84252 6.4379 5.84252 5.33333C5.84252 6.4379 6.73795 7.33333 7.84252 7.33333H8.18198C9.28655 7.33333 10.182 6.4379 10.182 5.33333C10.182 6.4379 11.0839 7.33333 12.1885 7.33333C13.6046 7.33333 14.589 5.91173 14.0787 4.59077L13.0779 2H2.9484L1.94742 4.5922Z"
        stroke="currentcolor"
        stroke-width="1.25"
        stroke-linejoin="round"
      />
    </svg>
  );
}

const StyleShopIcon = convertIcon(Icon, "style-shop");
export default StyleShopIcon;
