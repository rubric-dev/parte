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
        d="M8.29 7.71L11.29 10.71C11.47 10.89 11.72 11 12 11C12.28 11 12.53 10.89 12.71 10.71L15.71 7.71C15.89 7.53 16 7.28 16 7C16 6.45 15.55 6 15 6C14.72 6 14.47 6.11 14.29 6.29L13 7.59V1C13 0.45 12.55 0 12 0C11.45 0 11 0.45 11 1V7.59L9.71 6.29C9.53 6.11 9.28 6 9 6C8.45 6 8 6.45 8 7C8 7.28 8.11 7.53 8.29 7.71ZM14.5 13H1.5C0.67 13 0 13.67 0 14.5C0 15.33 0.67 16 1.5 16H14.5C15.33 16 16 15.33 16 14.5C16 13.67 15.33 13 14.5 13ZM1 5C1.28 5 1.53 4.89 1.71 4.71L3 3.41V10C3 10.55 3.45 11 4 11C4.55 11 5 10.55 5 10V3.41L6.29 4.7C6.47 4.89 6.72 5 7 5C7.55 5 8 4.55 8 4C8 3.72 7.89 3.47 7.71 3.29L4.71 0.29C4.53 0.11 4.28 0 4 0C3.72 0 3.47 0.11 3.29 0.29L0.29 3.29C0.11 3.47 0 3.72 0 4C0 4.55 0.45 5 1 5Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionChangesIcon = convertIcon(Icon, "action-changes");
export default ActionChangesIcon;
