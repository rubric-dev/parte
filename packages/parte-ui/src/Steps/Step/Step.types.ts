// 현재 스텝에 대한 정보

export type StepStatus = 'complete' | 'inProgress' | 'notStarted';

export type StepProps = {
  /**
   * @label 값을 주지 않으면 아이콘만 표기됩니다.
   */
  label?: string;
  currentStep: number;
  stepIndex: number;
};
