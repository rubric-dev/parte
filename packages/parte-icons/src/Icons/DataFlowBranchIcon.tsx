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
        d="M10.643 6.595c.22.418.344.894.344 1.399 0 .439-.094.855-.263 1.231l3.265 3.462-.002-1.75a.973.973 0 0 1 .314-.68.99.99 0 0 1 1.388.049c.186.2.316.459.3.714l-.009 4.03a.959.959 0 0 1-.3.68.971.971 0 0 1-.698.266l-4.053.002a.97.97 0 0 1-.679-.313 1.031 1.031 0 0 1 .05-1.422.972.972 0 0 1 .698-.265l1.7-.001-3.305-3.35a2.998 2.998 0 0 1-4.228-1.653H.999a1 1 0 0 1 0-2h4.166a2.998 2.998 0 0 1 4.06-1.735l3.449-3.268-1.745.002a.979.979 0 0 1-.631-1.692c.199-.186.459-.316.713-.3l4.025.009c.248.008.493.1.679.3.186.2.274.451.265.7l.002 4.046a.972.972 0 0 1-.313.68 1.03 1.03 0 0 1-1.42-.05.974.974 0 0 1-.266-.7V3.295l-3.34 3.301Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const DataFlowBranchIcon = convertIcon(Icon, "data-flow-branch");

export default DataFlowBranchIcon;
