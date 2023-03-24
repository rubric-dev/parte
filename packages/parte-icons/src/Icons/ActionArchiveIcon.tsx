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
        d="M13.382 0C13.7607 0 14.107 0.214002 14.2764 0.552786L16 4V15C16 15.5523 15.5523 16 15 16H1C0.447715 16 0 15.5523 0 15V4L1.72361 0.552786C1.893 0.214002 2.23926 0 2.61803 0H13.382ZM8 6C7.45 6 7 6.45 7 7V7V9.59L6.71 9.3L6.62869 9.22356C6.45796 9.08082 6.24 9 6 9C5.45 9 5 9.45 5 10C5 10.28 5.11 10.53 5.29 10.71V10.71L7.29 12.71L7.38565 12.794C7.55417 12.9236 7.76667 13 8 13C8.28 13 8.53 12.89 8.71 12.71V12.71L10.71 10.71L10.794 10.6144C10.9236 10.4458 11 10.2333 11 10C11 9.45 10.55 9 10 9C9.72 9 9.47 9.11 9.29 9.29V9.29L9 9.59V7L8.99324 6.8838C8.9352 6.38801 8.51071 6 8 6ZM13 2H3L2 4H14L13 2Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionArchiveIcon = convertIcon(Icon, "action-archive");
export default ActionArchiveIcon;
