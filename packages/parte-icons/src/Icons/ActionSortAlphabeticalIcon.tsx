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
        d="M6 12C5.72 12 5.47 12.11 5.29 12.29L5 12.59V8.99999C5 8.44999 4.55 7.99999 4 7.99999C3.45 7.99999 3 8.44999 3 8.99999V12.59L2.71 12.3V12.3C2.53 12.11 2.28 12 2 12C1.45 12 1 12.45 1 13C1 13.28 1.11 13.53 1.29 13.71L3.29 15.71C3.48 15.89 3.73 16 4 16C4.28 16 4.53 15.89 4.71 15.71L6.71 13.71C6.89 13.53 7 13.28 7 13C7.01 12.45 6.56 12 6 12ZM13.93 11.05V10.01H9.25V11.12H12.19L9 14.96V16H14.02V14.89H10.75L13.93 11.05ZM12.51 6.20999L13.13 7.98999H15L11.94 0.00999451H10.1L7 7.98999H8.81L9.45 6.20999H12.51ZM10.99 1.96999H11.01L12.04 4.89999H9.92L10.99 1.96999Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionSortAlphabeticalIcon = convertIcon(
  Icon,
  "action-sort-alphabetical"
);
export default ActionSortAlphabeticalIcon;
