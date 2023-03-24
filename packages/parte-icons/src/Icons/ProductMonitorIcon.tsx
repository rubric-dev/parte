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
        d="M13.334 2H2.667c-.737 0-1.333.597-1.333 1.333V10c0 .736.596 1.333 1.333 1.333h10.666c.737 0 1.334-.597 1.334-1.333V3.333c0-.736-.597-1.333-1.333-1.333zM5.333 14h5.334M8 11.333V14"
        stroke="currentcolor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ProductMonitorIcon = convertIcon(Icon, "product-monitor");
export default ProductMonitorIcon;
