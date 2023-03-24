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
        d="M14 4.00999H13V3.00999C13 2.45999 12.55 2.00999 12 2.00999C11.45 2.00999 11 2.45999 11 3.00999V4.00999H10C9.45 4.00999 9 4.45999 9 5.00999C9 5.55999 9.45 6.00999 10 6.00999H11V7.00999C11 7.55999 11.45 8.00999 12 8.00999C12.55 8.00999 13 7.55999 13 7.00999V6.00999H14C14.55 6.00999 15 5.55999 15 5.00999C15 4.44999 14.55 4.00999 14 4.00999ZM1 6.00999H7C7.55 6.00999 8 5.55999 8 5.00999C8 4.45999 7.55 4.00999 7 4.00999H1C0.45 4.00999 0 4.45999 0 5.00999C0 5.55999 0.45 6.00999 1 6.00999ZM9 12.01H1C0.45 12.01 0 12.46 0 13.01C0 13.56 0.45 14.01 1 14.01H9C9.55 14.01 10 13.56 10 13.01C10 12.45 9.55 12.01 9 12.01ZM9 8.00999H1C0.45 8.00999 0 8.45999 0 9.00999C0 9.55999 0.45 10.01 1 10.01H9C9.55 10.01 10 9.55999 10 9.00999C10 8.44999 9.55 8.00999 9 8.00999Z"
        fill="currentcolor"
      />
    </svg>
  );
}

const ActionAddToArtifactIcon = convertIcon(Icon, "action-add-to-artifact");
export default ActionAddToArtifactIcon;
