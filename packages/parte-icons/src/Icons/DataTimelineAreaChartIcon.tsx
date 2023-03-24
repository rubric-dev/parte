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
        d="M15 2.59L9.91 7.68L6.6 5.2L6.59 5.21C6.42 5.09 6.23 5 6 5C5.76 5 5.56 5.09 5.38 5.23V5.22L3 7.12V11H15V2.59ZM15 12H2V3C2 2.45 1.55 2 1 2C0.45 2 0 2.45 0 3V13C0 13.55 0.45 14 1 14H15C15.55 14 16 13.55 16 13C16 12.45 15.55 12 15 12Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataTimelineAreaChartIcon = convertIcon(Icon, "data-timeline-area-chart");
export default DataTimelineAreaChartIcon;
