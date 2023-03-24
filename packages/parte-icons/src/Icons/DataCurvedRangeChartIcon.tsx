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
        d="M15 12H3.12L4.93 10.61C6.66 11.62 10.46 10.58 14.01 8L12.79 6.5C10.3 8.3 7.86 9.37 6.65 9.29L14.3 3.4L13.7 2.6L5.87 8.63C5.86 7.56 7.67 5.44 10.34 3.5L9.12 2C5.38 4.7 3.34 8.1 4.25 9.87L2 11.6V3C2 2.45 1.55 2 1 2C0.45 2 0 2.45 0 3V13C0 13.55 0.45 14 1 14H15C15.55 14 16 13.55 16 13C16 12.45 15.55 12 15 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataCurvedRangeChartIcon = convertIcon(Icon, "data-curved-range-chart");

export default DataCurvedRangeChartIcon;
