import { convertIcon, IconProps } from "../common/Icon";

function Icon({ size, ...rest }: Pick<IconProps, "style" | "color" | "size">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M19.5 3H4.5C3.67158 3 3 3.67158 3 4.5V19.5C3 20.3285 3.67158 21 4.5 21H19.5C20.3285 21 21 20.3285 21 19.5V4.5C21 3.67158 20.3285 3 19.5 3Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.5C10.3807 11.5 11.5 10.3807 11.5 9C11.5 7.6193 10.3807 6.5 9 6.5C7.6193 6.5 6.5 7.6193 6.5 9C6.5 10.3807 7.6193 11.5 9 11.5Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8951 13.1097C14.3032 12.5635 15.1264 12.5769 15.5164 13.1363L19.9039 19.4281C20.3661 20.091 19.8917 21.0001 19.0835 21.0001H8L13.8951 13.1097Z"
        stroke="currentcolor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const StylePictureIcon = convertIcon(Icon, "style-picture");
export default StylePictureIcon;
