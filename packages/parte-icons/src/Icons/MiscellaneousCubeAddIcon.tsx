import { convertIcon, IconProps } from "../common/Icon";
function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M14 2h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0V4h-1a1 1 0 1 1 0-2h1V1a1 1 0 1 1 2 0v1ZM9.136.65a3.001 3.001 0 0 0 .992 5.222c.018.058.037.115.059.172L8 7.41 1.806 3.54 7.504.283a1 1 0 0 1 .992 0l.64.365ZM15 7.235v4.184a1 1 0 0 1-.504.868L8.5 15.714V8.277l2.187-1.367A2.994 2.994 0 0 0 13 8c.768 0 1.47-.289 2-.764ZM1.056 4.25 7.5 8.277v7.437l-5.996-3.426A1 1 0 0 1 1 11.42V4.58a1 1 0 0 1 .056-.33Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousCubeAddIcon = convertIcon(Icon, "miscellaneous-cube-add");
export default MiscellaneousCubeAddIcon;
