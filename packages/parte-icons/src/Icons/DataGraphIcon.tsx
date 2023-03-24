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
        d="M14 3C12.94 3 12.08 3.83 12.01 4.88L10.08 5.85C9.54 5.32 8.81 5 8 5C7.44 5 6.92 5.16 6.48 5.43L3.97 3.34C3.98 3.23 4 3.12 4 3C4 1.9 3.1 1 2 1C0.9 1 0 1.9 0 3C0 4.1 0.9 5 2 5C2.24 5 2.47 4.95 2.68 4.87L5.19 6.96C5.08 7.29 5 7.63 5 8C5 8.96 5.46 9.81 6.16 10.35L5.6 12.04C4.69 12.23 4 13.03 4 14C4 15.1 4.9 16 6 16C7.1 16 8 15.1 8 14C8 13.49 7.8 13.03 7.49 12.68L8.05 10.99C9.69 10.96 11 9.64 11 8C11 7.88 10.98 7.76 10.96 7.64L12.9 6.67C13.22 6.88 13.59 7 14 7C15.1 7 16 6.1 16 5C16 3.9 15.1 3 14 3Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const DataGraphIcon = convertIcon(Icon, "data-graph");
export default DataGraphIcon;
