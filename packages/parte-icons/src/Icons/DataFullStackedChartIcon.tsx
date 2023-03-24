import { convertIcon, IconProps } from "../common/Icon";

function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M13 12h1c.55 0 1-.45 1-1V8h-3v3c0 .55.45 1 1 1ZM10 2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v3h3V2Zm0 4H7v3h3V6Zm5-4c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2h3V2Zm0 3h-3v2h3V5ZM5 5H2v3h3V5Zm-2 7h1c.55 0 1-.45 1-1V9H2v2c0 .55.45 1 1 1Zm12 1H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1ZM5 2c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v2h3V2Zm3 10h1c.55 0 1-.45 1-1v-1H7v1c0 .55.45 1 1 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const DataFullStackedChartIcon = convertIcon(Icon, "data-full-stacked-chart");

export default DataFullStackedChartIcon;
