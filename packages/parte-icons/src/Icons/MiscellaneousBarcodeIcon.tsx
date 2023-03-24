import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M0 14h2V2H0v12Zm6 0h1V2H6v12Zm2 0h1V2H8v12Zm-5 0h2V2H3v12ZM15 2v12h1V2h-1Zm-5 12h1V2h-1v12Zm2 0h2V2h-2v12Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousBarcodeIcon = convertIcon(Icon, "miscellaneous-barcode");
export default MiscellaneousBarcodeIcon;
