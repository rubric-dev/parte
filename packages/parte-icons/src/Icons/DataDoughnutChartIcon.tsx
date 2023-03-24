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
        d="M11.86 7H15.91C15.45 3.39 12.61 0.52 9 0.07V4.14C10.4 4.5 11.49 5.6 11.86 7ZM12 8C12 10.21 10.21 12 8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4V0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8H12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataDoughnutChartIcon = convertIcon(Icon, "data-doughnut-chart");

export default DataDoughnutChartIcon;
