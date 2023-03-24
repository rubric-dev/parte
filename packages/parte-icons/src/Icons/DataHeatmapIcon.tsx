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
        d="M2 11C0.9 11 0 11.9 0 13C0 14.1 0.9 15 2 15C3.1 15 4 14.1 4 13C4 11.9 3.1 11 2 11ZM13 4C14.1 4 15 3.1 15 2C15 0.9 14.1 0 13 0C11.9 0 11 0.9 11 2C11 3.1 11.9 4 13 4ZM16 8.5C16 7.12 14.88 6 13.5 6C12.52 6 11.68 6.57 11.27 7.39C10.67 6.61 9.76 6.09 8.71 6.03C8.89 5.54 9 5.04 9 4.5C9 2.01 6.99 0 4.5 0C2.01 0 0 2.01 0 4.5C0 6.99 2.01 9 4.5 9C4.69 9 4.87 8.97 5.06 8.94C5.03 9.13 5 9.31 5 9.5C5 11.43 6.57 13 8.5 13C10.13 13 11.48 11.89 11.87 10.38C12.31 10.76 12.87 11 13.5 11C14.88 11 16 9.88 16 8.5ZM14.5 13C13.67 13 13 13.67 13 14.5C13 15.33 13.67 16 14.5 16C15.33 16 16 15.33 16 14.5C16 13.67 15.33 13 14.5 13Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataHeatmapIcon = convertIcon(Icon, "data-heatmap");

export default DataHeatmapIcon;
