export type ExtractToStyledProps<T, K extends keyof T> = {
  [P in K as `$${string & P}`]: T[P];
};
