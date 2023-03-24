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
        d="M11.334 1.333H4.667c-.737 0-1.333.597-1.333 1.334v10.666c0 .737.596 1.334 1.333 1.334h6.667c.736 0 1.333-.597 1.333-1.334V2.667c0-.737-.597-1.334-1.333-1.334zM8 12h.007"
        stroke="currentcolor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ProductSmartPhoneIcon = convertIcon(Icon, "product-smart-phone");
export default ProductSmartPhoneIcon;
