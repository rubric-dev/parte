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
        d="M8.00027 8V0C12.4203 0 16.0003 3.58 16.0003 8H8.00027ZM1.03027 8C1.03027 4.48 3.63027 1.58 7.00027 1.08V9H14.9203C14.4303 12.39 11.5303 15 8.01027 15C4.16027 15 1.03027 11.87 1.03027 8Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataPieChartIcon = convertIcon(Icon, "data-pie-chart");
export default DataPieChartIcon;
