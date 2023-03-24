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
        d="M4.16 9.002H.977C.44 9.002 0 8.532 0 7.994c0-.537.44-.99.978-.99h3.18A3.01 3.01 0 0 1 6.995 5a3.01 3.01 0 0 1 2.839 2.004h2.98c-.898-.756-1.404-1.193-1.518-1.31a1.03 1.03 0 0 1-.293-.705c0-.538.454-.989.992-.989a.95.95 0 0 1 .697.294c.118.124 1.122 1.13 3.014 3.016a.96.96 0 0 1 .293.684.975.975 0 0 1-.284.695l-3.018 3.027a.975.975 0 0 1-.694.284.996.996 0 0 1-.707-1.705l1.518-1.293H9.833A3.01 3.01 0 0 1 6.996 11 3.01 3.01 0 0 1 4.16 9.002Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const DataFlowLinearIcon = convertIcon(Icon, "data-flow-linear");

export default DataFlowLinearIcon;
