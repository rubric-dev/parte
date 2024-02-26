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
        d="M4.25 8.25C4.25 7.42159 3.57841 6.75 2.75 6.75C1.92159 6.75 1.25 7.42159 1.25 8.25C1.25 9.07841 1.92159 9.75 2.75 9.75C3.57841 9.75 4.25 9.07841 4.25 8.25Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 8.25C9.75 7.42159 9.07841 6.75 8.25 6.75C7.42159 6.75 6.75 7.42159 6.75 8.25C6.75 9.07841 7.42159 9.75 8.25 9.75C9.07841 9.75 9.75 9.07841 9.75 8.25Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15.25 8.25C15.25 7.42159 14.5784 6.75 13.75 6.75C12.9216 6.75 12.25 7.42159 12.25 8.25C12.25 9.07841 12.9216 9.75 13.75 9.75C14.5784 9.75 15.25 9.07841 15.25 8.25Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4.25 8.25L6.75 8.25"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.75 8.25H12.25"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
const LikertScaleIcon = convertIcon(Icon, "likert-scale");
export default LikertScaleIcon;
