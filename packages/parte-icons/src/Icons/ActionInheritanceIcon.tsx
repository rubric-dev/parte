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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8C5 9.66 6.34 11 8 11H12.59L11.3 9.71C11.11 9.53 11 9.28 11 9C11 8.45 11.45 8 12 8C12.28 8 12.53 8.11 12.71 8.29L15.71 11.29C15.89 11.47 16 11.72 16 12C16 12.28 15.89 12.53 15.71 12.71L12.71 15.71C12.53 15.89 12.28 16 12 16C11.45 16 11 15.55 11 15C11 14.72 11.11 14.47 11.29 14.29L12.59 13H8C5.24 13 3 10.76 3 8H1C0.447715 8 0 7.55228 0 7V1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V7C8 7.55228 7.55228 8 7 8H5ZM2 2V6H6V2H2Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionInheritanceIcon = convertIcon(Icon, "action-inheritance");
export default ActionInheritanceIcon;
