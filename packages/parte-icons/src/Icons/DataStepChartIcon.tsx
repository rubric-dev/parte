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
        d="M15 12H2V10H5C5.55 10 6 9.55 6 9V7H8V8C8 8.55 8.45 9 9 9H13C13.55 9 14 8.55 14 8V5H15C15.55 5 16 4.55 16 4C16 3.45 15.55 3 15 3H13C12.45 3 12 3.45 12 4V7H10V6C10 5.45 9.55 5 9 5H5C4.45 5 4 5.45 4 6V8H2V3C2 2.45 1.55 2 1 2C0.45 2 0 2.45 0 3V13C0 13.55 0.45 14 1 14H15C15.55 14 16 13.55 16 13C16 12.45 15.55 12 15 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataStepChartIcon = convertIcon(Icon, "data-step-chart");
export default DataStepChartIcon;
