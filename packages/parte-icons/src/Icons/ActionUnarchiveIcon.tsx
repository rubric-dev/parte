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
        d="M13.382 0C13.7607 0 14.107 0.214002 14.2764 0.552786L16 4V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V4L1.72361 0.552786C1.893 0.214002 2.23926 0 2.61803 0H13.382ZM8 6C7.72 6 7.47 6.11 7.29 6.29V6.29L5.29 8.29L5.20602 8.38565C5.07639 8.55417 5 8.76667 5 9C5 9.55 5.45 10 6 10C6.28 10 6.53 9.89 6.71 9.71V9.71L7 9.41V12L7.00676 12.1162C7.0648 12.612 7.48929 13 8 13C8.55 13 9 12.55 9 12V12V9.41L9.29 9.7L9.37131 9.77644C9.54204 9.91918 9.76 10 10 10C10.55 10 11 9.55 11 9C11 8.72 10.89 8.47 10.71 8.29V8.29L8.71 6.29L8.61435 6.20602C8.44583 6.07639 8.23333 6 8 6ZM13 2H3L2 4H14L13 2Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionUnarchiveIcon = convertIcon(Icon, "action-unarchive");
export default ActionUnarchiveIcon;
