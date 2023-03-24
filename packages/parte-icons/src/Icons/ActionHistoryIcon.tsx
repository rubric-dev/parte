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
        d="M8 3C7.45 3 7 3.45 7 4V8C7 8.28 7.11 8.53 7.29 8.71L9.29 10.71C9.47 10.89 9.72 11 10 11C10.55 11 11 10.55 11 10C11 9.72 10.89 9.47 10.71 9.29L9 7.59V4C9 3.45 8.55 3 8 3ZM8 0C5.6 0 3.46 1.07 2 2.74V1C2 0.45 1.55 0 1 0C0.45 0 0 0.45 0 1V5C0 5.55 0.45 6 1 6H5C5.55 6 6 5.55 6 5C6 4.45 5.55 4 5 4H3.54C4.64 2.78 6.23 2 8 2C11.31 2 14 4.69 14 8C14 10.61 12.33 12.81 10 13.63V13.62C9.37 13.85 8.71 14 8 14C4.69 14 2 11.31 2 8C2 7.45 1.55 7 1 7C0.45 7 0 7.45 0 8C0 12.42 3.58 16 8 16C8.34 16 8.67 15.97 9 15.93C9.02 15.93 9.04 15.92 9.06 15.92C12.98 15.4 16 12.06 16 8C16 3.58 12.42 0 8 0Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionHistoryIcon = convertIcon(Icon, "action-history");
export default ActionHistoryIcon;
