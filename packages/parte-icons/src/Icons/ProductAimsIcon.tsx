import { convertIcon, IconProps } from "../common/Icon";

function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect width={32} height={32} rx={16} fill="#E7E4F9" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 15h-.09A6.98 6.98 0 0017 9.1V9c0-.55-.45-1-1-1s-1 .45-1 1v.09A6.98 6.98 0 009.1 15H9c-.55 0-1 .45-1 1s.45 1 1 1h.1a6.969 6.969 0 005.9 5.91V23c0 .55.45 1 1 1s1-.45 1-1v-.09A6.98 6.98 0 0022.9 17h.1c.55 0 1-.45 1-1s-.45-1-1-1zm-6.02 5.9c-.05-.5-.46-.9-.98-.9s-.93.4-.98.9a5.017 5.017 0 01-3.92-3.92c.5-.05.9-.46.9-.98s-.4-.93-.9-.98a5.017 5.017 0 013.92-3.92c.05.5.46.9.98.9s.93-.4.98-.9c1.97.39 3.52 1.95 3.92 3.92-.5.05-.9.46-.9.98s.4.93.9.98a5.017 5.017 0 01-3.92 3.92zM16 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="#6E62B6"
      />
    </svg>
  );
}

const ProductAimsIcon = convertIcon(Icon, "product-aims");
export default ProductAimsIcon;
