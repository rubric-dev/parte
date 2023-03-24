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
        d="M9.186 6.099a2.813 2.813 0 0 1-.725-1.873h-.546l-1.61-1.6a.909.909 0 0 0-.667-.282H1.873a.944.944 0 0 0-.941.94v2.824h8.244l.01-.01Zm5.863-2.814h-3.764a.944.944 0 0 0-.941.94c0 .519.423.942.94.942h1.497L9.675 8.273a.932.932 0 0 0-.273.659.944.944 0 0 0 1.61.668l3.096-3.096V8c0 .518.424.941.941.941A.944.944 0 0 0 15.991 8V4.235a.946.946 0 0 0-.942-.95Zm-1.863 6.804-.847.848-.01-.01a2.765 2.765 0 0 1-1.986.838A2.82 2.82 0 0 1 7.52 8.94c0-.725.282-1.383.734-1.882H.932v6.588c0 .518.423.941.94.941H15.05a.944.944 0 0 0 .942-.94v-2.994a2.82 2.82 0 0 1-.942.17 2.863 2.863 0 0 1-1.863-.735Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const FileFolderSharedIcon = convertIcon(Icon, "file-folder-shared");
export default FileFolderSharedIcon;
