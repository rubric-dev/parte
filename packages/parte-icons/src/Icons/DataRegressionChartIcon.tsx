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
        d="M13 6.5C13 7.33 13.67 8 14.5 8C15.33 8 16 7.33 16 6.5C16 5.67 15.33 5 14.5 5C13.67 5 13 5.67 13 6.5ZM8.5 5C9.33 5 10 4.33 10 3.5C10 2.67 9.33 2 8.5 2C7.67 2 7 2.67 7 3.5C7 4.33 7.67 5 8.5 5ZM9 9.5C9 10.33 9.67 11 10.5 11C11.33 11 12 10.33 12 9.5C12 8.67 11.33 8 10.5 8C9.67 8 9 8.67 9 9.5ZM4.5 8C5.33 8 6 7.33 6 6.5C6 5.67 5.33 5 4.5 5C3.67 5 3 5.67 3 6.5C3 7.33 3.67 8 4.5 8ZM15 12H3.26L15.29 3.41L14.71 2.6L2 11.67V3C2 2.45 1.55 2 1 2C0.45 2 0 2.45 0 3V13C0 13.55 0.45 14 1 14H15C15.55 14 16 13.55 16 13C16 12.45 15.55 12 15 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataRegressionChartIcon = convertIcon(Icon, "data-regression-chart");
export default DataRegressionChartIcon;
