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
        d="M8 7C8.55 7 9 6.55 9 6C9 5.45 8.55 5 8 5C7.45 5 7 5.45 7 6C7 6.55 7.45 7 8 7ZM4 11H5C5.55 11 6 10.55 6 10V8C6 7.45 5.55 7 5 7H4C3.45 7 3 7.45 3 8V10C3 10.55 3.45 11 4 11ZM11 5C11.55 5 12 4.55 12 4V3C12 2.45 11.55 2 11 2C10.45 2 10 2.45 10 3V4C10 4.55 10.45 5 11 5ZM15 2H14C13.45 2 13 2.45 13 3V10C13 10.55 13.45 11 14 11H15C15.55 11 16 10.55 16 10V3C16 2.45 15.55 2 15 2ZM15 12H2V3C2 2.45 1.55 2 1 2C0.45 2 0 2.45 0 3V13C0 13.55 0.45 14 1 14H15C15.55 14 16 13.55 16 13C16 12.45 15.55 12 15 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataWaterfallChartIcon = convertIcon(Icon, "data-waterfall-chart");
export default DataWaterfallChartIcon;
