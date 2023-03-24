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
        d="M10.344 11.755H1.873a.944.944 0 0 0-.941.941c0 .518.423.942.94.942h8.472a.944.944 0 0 0 .94-.941.944.944 0 0 0-.94-.942Zm0-4.706H1.873a.944.944 0 0 0-.941.942c0 .517.423.94.94.94h8.472a.944.944 0 0 0 .94-.94.944.944 0 0 0-.94-.942Zm0-4.705H1.873a.944.944 0 0 0-.941.94c0 .518.423.942.94.942h8.472a.944.944 0 0 0 .94-.941.944.944 0 0 0-.94-.941Zm5.374 4.988-1.883-1.883a.944.944 0 0 0-1.61.668v3.765a.944.944 0 0 0 1.61.669l1.883-1.883A.938.938 0 0 0 15.99 8a.938.938 0 0 0-.273-.668Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const InterfaceMenuOpenIcon = convertIcon(Icon, "interface-menu-open");
export default InterfaceMenuOpenIcon;
