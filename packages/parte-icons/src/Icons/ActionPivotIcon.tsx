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
        d="M4.57 7.02L0.3 11.29C0.11 11.47 0 11.72 0 12C0 12.55 0.45 13 1 13C1.28 13 1.53 12.89 1.71 12.71L5.98 8.44C5.4 8.09 4.91 7.6 4.57 7.02ZM15 8C14.45 8 14 8.45 14 9V9.59L11.43 7.02C11.09 7.6 10.6 8.09 10.02 8.43L12.59 11H12C11.45 11 11 11.45 11 12C11 12.55 11.45 13 12 13H15C15.55 13 16 12.55 16 12V9C16 8.45 15.55 8 15 8ZM11 5C11 3.34 9.66 2 8 2C6.34 2 5 3.34 5 5C5 6.66 6.34 8 8 8C9.66 8 11 6.66 11 5ZM8 6C7.45 6 7 5.55 7 5C7 4.45 7.45 4 8 4C8.55 4 9 4.45 9 5C9 5.55 8.55 6 8 6Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionPivotIcon = convertIcon(Icon, "action-pivot");
export default ActionPivotIcon;
