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
        d="M15.576 13.581l-2.513-2.513a6.539 6.539 0 001.045-3.548A6.583 6.583 0 007.52.932 6.583 6.583 0 00.932 7.52a6.583 6.583 0 006.588 6.588 6.538 6.538 0 003.548-1.045l2.513 2.513a1.41 1.41 0 101.995-1.995zM7.52 12.226A4.708 4.708 0 012.814 7.52 4.708 4.708 0 017.52 2.814a4.708 4.708 0 014.706 4.706 4.708 4.708 0 01-4.706 4.706zm2.353-5.647H5.167a.466.466 0 00-.47.47c0 .264.206.471.47.471h4.706c.263 0 .47-.207.47-.47a.466.466 0 00-.47-.471zm0-1.883H5.167a.466.466 0 00-.47.471c0 .264.206.47.47.47h4.706c.263 0 .47-.206.47-.47a.466.466 0 00-.47-.47zm0 3.765H5.167a.466.466 0 00-.47.47c0 .264.206.471.47.471h4.706c.263 0 .47-.207.47-.47a.466.466 0 00-.47-.47z"
        fill="currentcolor"
      />
    </svg>
  );
}

const ActionSearchTemplateIcon = convertIcon(Icon, "action-search-template");
export default ActionSearchTemplateIcon;
