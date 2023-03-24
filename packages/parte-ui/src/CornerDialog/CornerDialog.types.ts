import { DialogProps } from '../Dialog/Dialog.types';

export interface CornerDialogProps extends Omit<DialogProps, 'close'> {
  isShown: boolean;
  onOpenComplete?: () => void;
  onCloseComplete?: () => void;
}
