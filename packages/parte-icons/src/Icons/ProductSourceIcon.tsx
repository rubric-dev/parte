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
      <g clipPath="url(#prefix__clip0_2760_13619)">
        <path
          d="M20.586 13H8a1 1 0 110-2h12.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a.997.997 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L20.586 13zM15.76 2.73A10.018 10.018 0 0012 2a9.964 9.964 0 00-7.071 2.929c-3.906 3.905-3.906 10.237 0 14.142A9.962 9.962 0 0011.999 22c1.29 0 2.567-.247 3.76-.73a.999.999 0 11.752 1.853 12.031 12.031 0 01-9.105-.034 11.962 11.962 0 01-3.892-2.604c-4.686-4.686-4.686-12.284 0-16.97A11.963 11.963 0 0112 0c1.545 0 3.077.296 4.51.877a1 1 0 11-.75 1.854V2.73z"
          fill="currentcolor"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_2760_13619">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ProductSourceIcon = convertIcon(Icon, "product-source");
export default ProductSourceIcon;
