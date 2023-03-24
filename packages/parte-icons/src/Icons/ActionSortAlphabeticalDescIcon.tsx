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
        d="M5.98999 11.99C5.70999 11.99 5.45999 12.1 5.27999 12.28V12.28L4.98999 12.57V8.99C4.98999 8.44 4.53999 7.99 3.98999 7.99C3.43999 7.99 2.98999 8.44 2.98999 8.99V12.58L2.69999 12.29C2.51999 12.11 2.26999 12 1.98999 12C1.43999 12 0.98999 12.45 0.98999 13C0.98999 13.28 1.09999 13.53 1.27999 13.71L3.27999 15.71C3.45999 15.89 3.70999 16 3.98999 16C4.26999 16 4.51999 15.89 4.69999 15.71L6.69999 13.71C6.87999 13.53 6.98999 13.28 6.98999 13C6.98999 12.44 6.53999 11.99 5.98999 11.99ZM12.7 10H11.32L8.99999 15.99H10.36L10.84 14.66H13.14L13.6 15.99H15L12.7 10ZM11.19 13.67L11.99 11.47H12.01L12.78 13.67H11.19V13.67ZM14.99 6.5H10.42L14.87 1.38V0H8.33999V1.48H12.44L7.98999 6.59V7.98H14.99V6.5Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionSortAlphabeticalDescIcon = convertIcon(
  Icon,
  "action-sort-alphabetical-desc"
);
export default ActionSortAlphabeticalDescIcon;
