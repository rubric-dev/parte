import {
  cloneElement,
  CSSProperties,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { COLORS, ColorKey } from "../../../parte-ui/src/@foundations";

export interface IconProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  svg: React.ReactElement;
  rotate?: number;
  size?: number;
  color?: ColorKey;
  type?: string;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { svg, rotate, style, type, color, size = "16", ...restProps } = props;

  /**
   * span 에 기본 lineHeight 가 있으므로 오버라이드 해야함.
   * */
  const overrideStyle: Pick<IconProps, "style"> = {
    style: { ...style },
  };

  const svgComponent = cloneElement(svg, {
    color: color && COLORS[color],
    size,
    style: overrideStyle.style,
  });

  const outerStyle: CSSProperties = {
    lineHeight: 0,
    display: "inline-block",
  };

  if (Number.isSafeInteger(rotate))
    outerStyle.transform = `rotate(${rotate}deg)`;
  Object.assign(outerStyle, style);

  return (
    <span
      role="img"
      ref={ref}
      aria-label={type}
      style={outerStyle}
      {...restProps}
    >
      {svgComponent}
    </span>
  );
});

type SvgFn = (
  props: Pick<IconProps, "style" | "color" | "size">
) => JSX.Element;

const convertIcon = (Svg: SvgFn, iconType: string) => {
  /**
   * 일단 size default 로 아이콘 컴포넌트를 만든 다음, cloneElement 로 props 를 바꾼다.
   * */
  // eslint-disable-next-line react/display-name
  const InnerIcon = forwardRef<
    HTMLSpanElement,
    Omit<IconProps, "svg" | "type">
  >((props, ref) => (
    <Icon svg={<Svg />} type={iconType} ref={ref as any} {...props} />
  ));

  return InnerIcon;
};

export { convertIcon };

Icon.displayName = "Icon";
export default Icon;
