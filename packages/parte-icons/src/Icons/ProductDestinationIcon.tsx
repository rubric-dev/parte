import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#prefix__clip0_2760_13618)">
        <path
          d="M13.586 13H1a1 1 0 010-2h12.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a.997.997 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 13zM4.929 4.929a1 1 0 01-1.414-1.414c4.686-4.687 12.284-4.687 16.97 0 4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0a1 1 0 011.414-1.414c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0z"
          fill="currentcolor"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_2760_13618">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ProductDestinationIcon = convertIcon(Icon, "product-destination");
export default ProductDestinationIcon;
