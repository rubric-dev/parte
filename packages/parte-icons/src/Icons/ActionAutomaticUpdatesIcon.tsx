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
        d="M8 14C4.69 14 2 11.31 2 8C2 6.23 2.78 4.64 4 3.54V5C4 5.55 4.45 6 5 6C5.55 6 6 5.55 6 5V1C6 0.45 5.55 0 5 0H1C0.45 0 0 0.45 0 1C0 1.55 0.45 2 1 2H2.74C1.07 3.46 0 5.6 0 8C0 12.42 3.58 16 8 16C8.55 16 9 15.55 9 15C9 14.45 8.55 14 8 14ZM8 2C9.08 2 10.08 2.31 10.95 2.81L12.42 1.34C11.15 0.49 9.64 0 8 0C7.45 0 7 0.45 7 1C7 1.55 7.45 2 8 2ZM10.71 8.71L15.71 3.71C15.89 3.53 16 3.28 16 3C16 2.45 15.55 2 15 2C14.72 2 14.47 2.11 14.29 2.29L10 6.59L8.71 5.29C8.53 5.11 8.28 5 8 5C7.45 5 7 5.45 7 6C7 6.28 7.11 6.53 7.29 6.71L9.29 8.71C9.47 8.89 9.72 9 10 9C10.28 9 10.53 8.89 10.71 8.71ZM16 8C16 7.45 15.94 6.92 15.84 6.4L13.97 8.27C13.89 9.93 13.16 11.41 12 12.45V11C12 10.45 11.55 10 11 10C10.45 10 10 10.45 10 11V15C10 15.55 10.45 16 11 16H15C15.55 16 16 15.55 16 15C16 14.45 15.55 14 15 14H13.26C14.93 12.54 16 10.4 16 8Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionAutomaticUpdatesIcon = convertIcon(
  Icon,
  "action-automatic-updates"
);
export default ActionAutomaticUpdatesIcon;
