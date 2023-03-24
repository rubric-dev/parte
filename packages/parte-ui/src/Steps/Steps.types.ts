import { HTMLAttributes } from 'react';

export type StepsProps = HTMLAttributes<HTMLDivElement> & {
  stepList: { id: number; label: string }[];
  currentStep: number;
};
