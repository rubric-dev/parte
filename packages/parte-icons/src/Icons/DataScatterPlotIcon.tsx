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
        d="M15 12H2V3C2 2.45 1.55 2 1 2C0.45 2 0 2.45 0 3V13C0 13.55 0.45 14 1 14H15C15.55 14 16 13.55 16 13C16 12.45 15.55 12 15 12ZM14.5 5C15.33 5 16 4.33 16 3.5C16 2.67 15.33 2 14.5 2C13.67 2 13 2.67 13 3.5C13 4.33 13.67 5 14.5 5ZM11.5 9C12.33 9 13 8.33 13 7.5C13 6.67 12.33 6 11.5 6C10.67 6 10 6.67 10 7.5C10 8.33 10.67 9 11.5 9ZM7.5 7C8.33 7 9 6.33 9 5.5C9 4.67 8.33 4 7.5 4C6.67 4 6 4.67 6 5.5C6 6.33 6.67 7 7.5 7ZM4.5 11C5.33 11 6 10.33 6 9.5C6 8.67 5.33 8 4.5 8C3.67 8 3 8.67 3 9.5C3 10.33 3.67 11 4.5 11Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataScatterPlotIcon = convertIcon(Icon, "data-scatter-plot");
export default DataScatterPlotIcon;
