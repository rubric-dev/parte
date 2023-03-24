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
        d="M4 11C2.9 11 2 11.9 2 13C2 14.1 2.9 15 4 15C5.1 15 6 14.1 6 13C6 11.9 5.1 11 4 11ZM11 4H3.41L4.7 2.71C4.89 2.53 5 2.28 5 2C5 1.45 4.55 1 4 1C3.72 1 3.47 1.11 3.29 1.29L0.29 4.29C0.11 4.47 0 4.72 0 5C0 5.28 0.11 5.53 0.29 5.71L3.29 8.71C3.47 8.89 3.72 9 4 9C4.55 9 5 8.55 5 8C5 7.72 4.89 7.47 4.71 7.29L3.41 6H11C12.66 6 14 7.34 14 9C14 10.66 12.66 12 11 12H7V14H11C13.76 14 16 11.76 16 9C16 6.24 13.76 4 11 4Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionUndoIcon = convertIcon(Icon, "action-undo");
export default ActionUndoIcon;
