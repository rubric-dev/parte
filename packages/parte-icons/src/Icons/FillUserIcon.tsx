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
        d="M7.99967 6.66665C9.47243 6.66665 10.6663 5.47274 10.6663 3.99998C10.6663 2.52722 9.47243 1.33331 7.99967 1.33331C6.52692 1.33331 5.33301 2.52722 5.33301 3.99998C5.33301 5.47274 6.52692 6.66665 7.99967 6.66665Z"
        fill="currentcolor"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask id="path-2-inside-1_5419_18187" fill="white">
        <path d="M14 14.6667C14 11.353 11.3137 8.66669 8 8.66669C4.6863 8.66669 2 11.353 2 14.6667" />
      </mask>
      <path
        d="M14 14.6667C14 11.353 11.3137 8.66669 8 8.66669C4.6863 8.66669 2 11.353 2 14.6667"
        fill="currentcolor"
      />
      <path
        d="M12.5 14.6667C12.5 15.4951 13.1716 16.1667 14 16.1667C14.8284 16.1667 15.5 15.4951 15.5 14.6667H12.5ZM0.5 14.6667C0.5 15.4951 1.17157 16.1667 2 16.1667C2.82843 16.1667 3.5 15.4951 3.5 14.6667H0.5ZM15.5 14.6667C15.5 10.5246 12.1421 7.16669 8 7.16669V10.1667C10.4853 10.1667 12.5 12.1814 12.5 14.6667H15.5ZM8 7.16669C3.85787 7.16669 0.5 10.5246 0.5 14.6667H3.5C3.5 12.1814 5.51473 10.1667 8 10.1667V7.16669Z"
        fill="currentcolor"
        mask="url(#path-2-inside-1_5419_18187)"
      />
    </svg>
  );
}
const FillUserIcon = convertIcon(Icon, "fill-user");
export default FillUserIcon;
