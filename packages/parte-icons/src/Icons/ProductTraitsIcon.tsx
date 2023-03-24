import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width={32} height={32} rx={16} fill="#E7E4F9" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 10.5a2.5 2.5 0 00-2.5 2.5c0 1.38 1.12 3 2.5 3s2.5-1.62 2.5-3a2.5 2.5 0 00-2.5-2.5zm-4.5 10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-1.114c0-.888-.585-1.67-1.437-1.92C18.257 17.228 17.178 17 16 17a10.917 10.917 0 00-3.067.46 2 2 0 00-1.433 1.919V20.5z"
        fill="#6E62B6"
      />
      <path
        d="M26.436 11.165c-.265.205-.555.38-.867.514.605 1.34.931 2.807.931 4.321 0 5.79-4.71 10.5-10.5 10.5S5.5 21.79 5.5 16 10.21 5.5 16 5.5c2.011 0 3.975.59 5.654 1.663-.1.268-.151.551-.154.837 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5c-.724 0-1.372.315-1.829.808A11.516 11.516 0 0016 4.5C9.659 4.5 4.5 9.659 4.5 16S9.659 27.5 16 27.5 27.5 22.341 27.5 16a11.5 11.5 0 00-1.064-4.835z"
        fill="#6E62B6"
      />
    </svg>
  );
}

const ProductTraitsIcon = convertIcon(Icon, "product-traits");
export default ProductTraitsIcon;
