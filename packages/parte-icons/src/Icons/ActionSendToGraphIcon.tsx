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
        d="M6 9H2C1.45 9 1 9.45 1 10C1 10.55 1.45 11 2 11H3.59L0.3 14.29C0.11 14.47 0 14.72 0 15C0 15.55 0.45 16 1 16C1.28 16 1.53 15.89 1.71 15.71L5 12.41V14C5 14.55 5.45 15 6 15C6.55 15 7 14.55 7 14V10C7 9.45 6.55 9 6 9ZM14 9.5C13.44 9.5 12.94 9.73 12.58 10.09L10.45 8.85L8.99 8L12.58 5.91C12.94 6.27 13.44 6.5 14 6.5C15.1 6.5 16 5.6 16 4.5C16 3.4 15.1 2.5 14 2.5C12.9 2.5 12 3.4 12 4.5C12 4.69 12.03 4.87 12.08 5.04L8.5 7.13V3.93C9.36 3.71 10 2.93 10 2C10 0.9 9.1 0 8 0C6.9 0 6 0.9 6 2C6 2.93 6.64 3.71 7.5 3.93V7.13L6.62 6.61L3.92 5.04C3.97 4.87 4 4.69 4 4.5C4 3.4 3.1 2.5 2 2.5C0.9 2.5 0 3.4 0 4.5C0 5.6 0.9 6.5 2 6.5C2.56 6.5 3.06 6.27 3.42 5.91L5.55 7.15L9.39 9.39L12.09 10.96C12.03 11.13 12 11.31 12 11.5C12 12.6 12.9 13.5 14 13.5C15.1 13.5 16 12.6 16 11.5C16 10.4 15.1 9.5 14 9.5Z"
        fill="currentcolor"
      />
    </svg>
  );
}
const ActionSendToGraphIcon = convertIcon(Icon, "action-send-to-graph");
export default ActionSendToGraphIcon;
