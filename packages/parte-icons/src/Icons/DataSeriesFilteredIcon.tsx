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
        d="M9.29 9.3C9.59 9.92 10.09 10.42 10.71 10.71L9.71 11.71C9.53 11.89 9.28 12 9 12C8.72 12 8.47 11.89 8.29 11.7L5 8.41L2 11.41V13H15C15.55 13 16 13.45 16 14C16 14.55 15.55 15 15 15H1C0.45 15 0 14.55 0 14V4C0 3.45 0.45 3 1 3C1.55 3 2 3.45 2 4V8.59L4.29 6.29C4.47 6.11 4.72 6 5 6C5.28 6 5.53 6.11 5.71 6.29L9 9.59L9.29 9.3ZM15.48 1C15.79 1 16 1.26 16 1.57C16 1.73 15.94 1.87 15.83 1.98L12.97 4.71V7.34C12.97 7.5 12.91 7.64 12.8 7.75L11.98 8.85C11.88 8.95 11.73 9.02 11.57 9.02C11.26 9.02 11 8.76 11 8.45V4.71L8.17 1.98C8.06 1.87 8 1.73 8 1.57C8 1.26 8.26 1 8.57 1H15.48Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataSeriesFilteredIcon = convertIcon(Icon, "data-series-filtered");
export default DataSeriesFilteredIcon;
