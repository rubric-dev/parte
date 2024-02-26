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
      <g clipPath="url(#clip0_5353_29762)">
        <path
          d="M3 3.33331V14.6666H13V3.33331H3Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6.66699 6.66669V11"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.33301 6.66669V11"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.33301 3.33331H14.6663"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33301 3.33337L6.42934 1.33337H9.59204L10.6663 3.33337H5.33301Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5353_29762">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
const DeleteIcon = convertIcon(Icon, "delete");
export default DeleteIcon;
