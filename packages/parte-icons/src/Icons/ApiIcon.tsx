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
        d="M12.3337 7.33334L11.3337 8.33334L7.66699 4.66667L8.66699 3.66667C9.16699 3.16664 11.0003 2.33332 12.3337 3.66667C13.667 5 12.8337 6.8333 12.3337 7.33334Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9997 2L12.333 3.66667"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.66629 8.66663L4.66629 7.66663L8.33296 11.3333L7.33296 12.3333C6.83296 12.8333 4.99962 13.6667 3.66629 12.3333C2.33296 11 3.16629 9.16666 3.66629 8.66663Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.66699 10.6666L9.00033 9.33331"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 14L3.66667 12.3333"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33301 8.33333L6.66634 7"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const ApiIcon = convertIcon(Icon, "api");
export default ApiIcon;
