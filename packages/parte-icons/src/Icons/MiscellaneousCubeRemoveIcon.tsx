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
        d="M10.364 5.933 8 7.41 1.806 3.54 7.504.283a1 1 0 0 1 .992 0l.64.365a3.001 3.001 0 0 0 1.228 5.283ZM15 6v5.42a1 1 0 0 1-.504.868L8.5 15.714V8.277L12.143 6H15ZM1.056 4.25 7.5 8.277v7.437l-5.996-3.426A1 1 0 0 1 1 11.42V4.58a1 1 0 0 1 .056-.33ZM11 2h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousCubeRemoveIcon = convertIcon(
  Icon,
  "miscellaneous-cube-remove"
);
export default MiscellaneousCubeRemoveIcon;
