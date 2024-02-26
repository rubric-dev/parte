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
        d="M10.9997 12.6666H7.33301V9.99998H11.9997V7.33331H14.6663V12.6666H12.9997L11.9997 13.6666L10.9997 12.6666Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 2H11.9997V10H5.66634L4.33301 11.3333L2.99967 10H1.33301V2Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7.33331H6"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 4.66669H8"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
const CommentsIcon = convertIcon(Icon, "comments");
export default CommentsIcon;
