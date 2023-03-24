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
        d="M11.993 4.997a1.002 1.002 0 00-1.71-.71l-2.288 2.3-2.288-2.29a.965.965 0 00-.71-.3 1.002 1.002 0 00-.71 1.71l2.289 2.288-2.289 2.289a1.002 1.002 0 001.42 1.42l2.288-2.29 2.289 2.29a1.002 1.002 0 001.42-1.42l-2.29-2.289 2.289-2.288c.18-.18.29-.43.29-.71zM7.995 0A7.993 7.993 0 000 7.995a7.993 7.993 0 007.995 7.996 7.993 7.993 0 007.996-7.996A7.993 7.993 0 007.995 0zm0 13.992A6.001 6.001 0 012 7.995 6.001 6.001 0 017.996 2a6.001 6.001 0 015.996 5.996 5.995 5.995 0 01-5.996 5.997z"
        fill="currentcolor"
      />
    </svg>
  );
}

const ActionDeleteIcon = convertIcon(Icon, "action-delete");
export default ActionDeleteIcon;
