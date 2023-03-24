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
        d="M15.89 14.56V14.56L11.9 6.56H11.89C11.72 6.23 11.39 6 11 6C10.61 6 10.28 6.23 10.11 6.56H10.1L9 8.76L7.17 7.38L7.4 7.2V7.2C8.37 6.47 9 5.31 9 4V3H10C10.55 3 11 2.55 11 2C11 1.45 10.55 1 10 1H7C7 0.45 6.55 0 6 0H5C4.45 0 4 0.45 4 1H1C0.45 1 0 1.45 0 2C0 2.55 0.45 3 1 3H7V4C7 4.66 6.68 5.25 6.18 5.61V5.61L5.5 6.12L4.82 5.62V5.62C4.32 5.25 4 4.66 4 4H2C2 5.31 2.63 6.47 3.6 7.2V7.2L3.83 7.37L1.4 9.2L1.41 9.21C1.17 9.4 1 9.67 1 10C1 10.55 1.45 11 2 11C2.23 11 2.42 10.91 2.59 10.79L2.6 10.8L5.5 8.63L8.1 10.58L6.11 14.56H6.12C6.05 14.69 6 14.84 6 15C6 15.55 6.45 16 7 16C7.39 16 7.72 15.77 7.89 15.44H7.9L8.62 14H13.38L14.1 15.45H14.11C14.28 15.77 14.61 16 15 16C15.55 16 16 15.55 16 15C16 14.84 15.95 14.69 15.89 14.56ZM9.62 12L11 9.24L12.38 12H9.62Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionTranslateIcon = convertIcon(Icon, "action-translate");
export default ActionTranslateIcon;
