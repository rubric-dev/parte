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
        d="M9.33366 1.513V4.26669C9.33366 4.64006 9.33366 4.82675 9.40633 4.96935C9.47026 5.09479 9.57219 5.19678 9.69766 5.2607C9.84026 5.33336 10.0269 5.33336 10.4003 5.33336H13.154M10.667 8.66665H5.33366M10.667 11.3333H5.33366M6.66699 5.99998H5.33366M9.33366 1.33331H5.86699C4.74689 1.33331 4.18683 1.33331 3.75901 1.5513C3.38269 1.74305 3.07673 2.04901 2.88498 2.42533C2.66699 2.85315 2.66699 3.41321 2.66699 4.53331V11.4666C2.66699 12.5868 2.66699 13.1468 2.88498 13.5746C3.07673 13.951 3.38269 14.2569 3.75901 14.4486C4.18683 14.6666 4.74689 14.6666 5.86699 14.6666H10.1337C11.2538 14.6666 11.8138 14.6666 12.2417 14.4486C12.618 14.2569 12.9239 13.951 13.1157 13.5746C13.3337 13.1468 13.3337 12.5868 13.3337 11.4666V5.33331L9.33366 1.33331Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const FileTwoIcon = convertIcon(Icon, "file-two");
export default FileTwoIcon;
