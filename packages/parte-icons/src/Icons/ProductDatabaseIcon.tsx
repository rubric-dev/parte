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
        d="M8 5.333c3.314 0 6-.895 6-2 0-1.104-2.686-2-6-2s-6 .896-6 2c0 1.105 2.686 2 6 2zM14 8c0 1.107-2.667 2-6 2s-6-.893-6-2"
        stroke="currentcolor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 3.333v9.334c0 1.106 2.667 2 6 2s6-.894 6-2V3.333"
        stroke="currentcolor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ProductDatabaseIcon = convertIcon(Icon, "product-database");
export default ProductDatabaseIcon;
