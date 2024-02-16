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
        d="M11.6663 4H4.33301C3.78072 4 3.33301 4.44772 3.33301 5V13C3.33301 13.5523 3.78072 14 4.33301 14H11.6663C12.2186 14 12.6663 13.5523 12.6663 13V5C12.6663 4.44772 12.2186 4 11.6663 4Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M10 6.00004V3.33337C10 2.2288 9.10457 1.33337 8 1.33337C6.89543 1.33337 6 2.2288 6 3.33337V6.00004"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
const ShoppingBagOneIcon = convertIcon(Icon, "shopping-bag-one");
export default ShoppingBagOneIcon;
