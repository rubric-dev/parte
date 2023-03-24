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
        d="M8.441 1.104a.985.985 0 0 0-.882 0L16 5.501c0 .186-.122.373-.365.499l-1.63.883.011 3.131c.002.548.447.99.994.99a.99.99 0 0 0 .99-.99V5.501c0-.187-.121-.374-.365-.501L8.44 1.104ZM7.758 11.48 3.371 9.046A.25.25 0 0 0 3 9.265v2.955a.25.25 0 0 0 .134.222l4.635 2.436a.5.5 0 0 0 .466 0l4.635-2.436a.25.25 0 0 0 .134-.222V9.265a.25.25 0 0 0-.371-.218l-4.39 2.432a.5.5 0 0 1-.485 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
const MiscellaneousLearningIcon = convertIcon(Icon, "miscellaneous-learning");
export default MiscellaneousLearningIcon;
