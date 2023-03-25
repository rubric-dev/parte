import { BoxProps } from '../Layout/Box.types';

type CommonCardProps = BoxProps & {
  disabled?: boolean;
};

export type DefaultCardProps = CommonCardProps & {
  type?: 'default';
};

export type SelectableCardProps = CommonCardProps & {
  type: 'selectable';
  selected?: boolean;
};

export type CardProps = DefaultCardProps | SelectableCardProps;
