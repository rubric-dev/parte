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
        d="M22.333 9.667H9.666c-.874 0-1.583.709-1.583 1.583v7.917c0 .874.709 1.583 1.583 1.583h12.667c.875 0 1.583-.709 1.583-1.583V11.25c0-.874-.709-1.583-1.583-1.583zM12.833 23.917h6.333M16 20.75v3.167"
        stroke="#6E62B6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ProductEventIcon = convertIcon(Icon, "product-event");
export default ProductEventIcon;
