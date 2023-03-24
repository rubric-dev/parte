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
        d="M12.226 7.05a.944.944 0 0 0 .941-.942.944.944 0 0 0-.941-.94.944.944 0 0 0-.941.94c0 .518.423.941.94.941Zm2.823-4.706H1.873a.944.944 0 0 0-.941.94v9.412c0 .518.423.942.94.942H15.05a.944.944 0 0 0 .942-.941V3.284a.944.944 0 0 0-.942-.941Zm-.94 8.47L9.401 7.991l-.94 1.882-2.824-3.765-2.824 4.706V4.226h11.294v6.588Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MediaMediaIcon = convertIcon(Icon, "media-media");
export default MediaMediaIcon;
