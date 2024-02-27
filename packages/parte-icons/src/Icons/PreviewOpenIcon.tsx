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
        d="M7.99967 12C11.6816 12 14.6663 8 14.6663 8C14.6663 8 11.6816 4 7.99967 4C4.31777 4 1.33301 8 1.33301 8C1.33301 8 4.31777 12 7.99967 12Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.99967 9.66665C8.92014 9.66665 9.66634 8.92045 9.66634 7.99998C9.66634 7.07951 8.92014 6.33331 7.99967 6.33331C7.07921 6.33331 6.33301 7.07951 6.33301 7.99998C6.33301 8.92045 7.07921 9.66665 7.99967 9.66665Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const PreviewOpenIcon = convertIcon(Icon, "preview-open");
export default PreviewOpenIcon;
