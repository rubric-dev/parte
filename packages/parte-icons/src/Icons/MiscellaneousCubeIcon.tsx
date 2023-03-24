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
        d="M14.194 3.54 8 7.41 1.806 3.54 7.504.283a1 1 0 0 1 .992 0l5.698 3.255Zm.75.71a.999.999 0 0 1 .056.33v6.84a1 1 0 0 1-.504.868L8.5 15.714V8.277l6.444-4.027Zm-13.888 0L7.5 8.277v7.437l-5.996-3.426A1 1 0 0 1 1 11.42V4.58a1 1 0 0 1 .056-.33Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousCubeIcon = convertIcon(Icon, "miscellaneous-cube");
export default MiscellaneousCubeIcon;
