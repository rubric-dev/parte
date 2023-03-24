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
        d="M5.175 7.004a3.003 3.003 0 0 1 2.83-2.001c1.305 0 2.416.835 2.83 2.001h1.985c-.896-.756-1.401-1.193-1.515-1.31a1.03 1.03 0 0 1-.293-.705c0-.538.454-.989.99-.989a.95.95 0 0 1 .697.294c.117.124 1.12 1.13 3.008 3.016a.96.96 0 0 1 .293.684.976.976 0 0 1-.283.695l-3.013 3.027a.995.995 0 0 1-1.691-.702c0-.273.116-.544.292-.72l1.515-1.292h-1.98a3.004 3.004 0 0 1-2.835 2.016A3.003 3.003 0 0 1 5.17 9.002H3.18l1.515 1.292c.176.176.292.447.292.72a.995.995 0 0 1-1.69.702L.282 8.69A.976.976 0 0 1 0 7.994a.96.96 0 0 1 .293-.684A535.869 535.869 0 0 0 3.3 4.294.95.95 0 0 1 3.997 4a1 1 0 0 1 .99.989c0 .273-.12.528-.292.705-.114.117-.62.554-1.515 1.31h1.995Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const DataFlowReviewIcon = convertIcon(Icon, "data-flow-review");

export default DataFlowReviewIcon;
