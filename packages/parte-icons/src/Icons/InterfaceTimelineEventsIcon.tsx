import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M8 11H7v1h1v-1Zm-4 0H3v1h1v-1Zm7-8c.6 0 1-.5 1-1V1c0-.5-.4-1-1-1s-1 .5-1 1v1c0 .5.5 1 1 1ZM4 3c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1S3 .5 3 1v1c0 .5.5 1 1 1Zm10-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h13c.6 0 1-.5 1-1V2c0-.5-.4-1-1-1ZM5 13H2v-3h3v3Zm0-4H2V6h3v3Zm4 4H6v-3h3v3Zm0-4H6V6h3v3Zm4 4h-3v-3h3v3Zm0-4h-3V6h3v3Zm-1-2h-1v1h1V7Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceTimelineEventsIcon = convertIcon(
  Icon,
  "interface-timeline-events"
);
export default InterfaceTimelineEventsIcon;
