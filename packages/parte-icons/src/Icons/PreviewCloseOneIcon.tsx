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
        d="M3.28563 6C2.0792 7 1.33301 8 1.33301 8C1.33301 8 4.31777 12 7.99967 12C8.45631 12 8.90221 11.9385 9.33301 11.8307M6.67694 4.16667C7.10447 4.06053 7.54681 4 7.99967 4C11.6816 4 14.6663 8 14.6663 8C14.6663 8 13.9201 9 12.7137 10"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.77107 6.87372C6.49904 7.17032 6.33301 7.56575 6.33301 7.99995C6.33301 8.92042 7.07921 9.66662 7.99967 9.66662C8.45391 9.66662 8.86571 9.48488 9.16634 9.19018"
        stroke="v"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14L2 2"
        stroke="v"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const PreviewCloseOneIcon = convertIcon(Icon, "preview-close-one");
export default PreviewCloseOneIcon;
