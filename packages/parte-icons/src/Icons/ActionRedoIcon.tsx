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
        d="M12 11C10.9 11 10 11.9 10 13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13C14 11.9 13.1 11 12 11ZM15.71 4.29L12.71 1.29C12.53 1.11 12.28 1 12 1C11.45 1 11 1.45 11 2C11 2.28 11.11 2.53 11.29 2.71L12.59 4H5C2.24 4 0 6.24 0 9C0 11.76 2.24 14 5 14H9V12H5C3.34 12 2 10.66 2 9C2 7.34 3.34 6 5 6H12.59L11.3 7.29C11.11 7.47 11 7.72 11 8C11 8.55 11.45 9 12 9C12.28 9 12.53 8.89 12.71 8.71L15.71 5.71C15.89 5.53 16 5.28 16 5C16 4.72 15.89 4.47 15.71 4.29Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionRedoIcon = convertIcon(Icon, "action-redo");
export default ActionRedoIcon;
