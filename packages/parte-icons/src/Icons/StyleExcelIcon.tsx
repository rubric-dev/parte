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
        d="M2.6665 5.00004V2.00004C2.6665 1.63185 2.96498 1.33337 3.33317 1.33337H12.6665C13.0347 1.33337 13.3332 1.63185 13.3332 2.00004V14C13.3332 14.3682 13.0347 14.6667 12.6665 14.6667H3.33317C2.96498 14.6667 2.6665 14.3682 2.6665 14V11"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3335 5H11.3335"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M9.3335 7.66663H11.3335"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M9.3335 10.3334H11.3335"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M7.3335 5H1.3335V11H7.3335V5Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3335 7L5.3335 9"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.3335 7L3.3335 9"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StyleExcelIcon = convertIcon(Icon, "style-excel");
export default StyleExcelIcon;
