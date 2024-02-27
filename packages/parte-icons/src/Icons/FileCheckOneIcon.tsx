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
        d="M13.3337 8.33331V4.53331C13.3337 3.41321 13.3337 2.85315 13.1157 2.42533C12.9239 2.04901 12.618 1.74305 12.2417 1.5513C11.8138 1.33331 11.2538 1.33331 10.1337 1.33331H5.86699C4.74689 1.33331 4.18683 1.33331 3.75901 1.5513C3.38269 1.74305 3.07673 2.04901 2.88498 2.42533C2.66699 2.85315 2.66699 3.41321 2.66699 4.53331V11.4666C2.66699 12.5868 2.66699 13.1468 2.88498 13.5746C3.07673 13.951 3.38269 14.2569 3.75901 14.4486C4.18683 14.6666 4.74689 14.6666 5.86699 14.6666H8.00033M9.33366 7.33331H5.33366M6.66699 9.99998H5.33366M10.667 4.66665H5.33366M9.66699 12.6666L11.0003 14L14.0003 11"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const FileCheckOneIcon = convertIcon(Icon, "file-check-one");
export default FileCheckOneIcon;
