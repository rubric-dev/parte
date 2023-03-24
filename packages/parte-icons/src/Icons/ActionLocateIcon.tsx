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
        d="M15 7H14.91C14.47 3.95 12.06 1.54 9 1.1V1C9 0.45 8.55 0 8 0C7.45 0 7 0.45 7 1V1.09C3.95 1.53 1.54 3.94 1.1 7H1C0.45 7 0 7.45 0 8C0 8.55 0.45 9 1 9H1.1C1.54 12.06 3.94 14.47 7 14.91V15C7 15.55 7.45 16 8 16C8.55 16 9 15.55 9 15V14.91C12.05 14.47 14.46 12.06 14.9 9H15C15.55 9 16 8.55 16 8C16 7.45 15.55 7 15 7ZM8.98 12.9C8.93 12.4 8.52 12 8 12C7.48 12 7.07 12.4 7.02 12.9C5.05 12.5 3.49 10.95 3.1 8.98C3.6 8.93 4 8.52 4 8C4 7.48 3.6 7.07 3.1 7.02C3.49 5.05 5.05 3.5 7.02 3.1C7.07 3.6 7.48 4 8 4C8.52 4 8.93 3.6 8.98 3.1C10.95 3.49 12.5 5.05 12.9 7.02C12.4 7.07 12 7.48 12 8C12 8.52 12.4 8.93 12.9 8.98C12.51 10.95 10.95 12.5 8.98 12.9ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionLocateIcon = convertIcon(Icon, "action-locate");
export default ActionLocateIcon;
