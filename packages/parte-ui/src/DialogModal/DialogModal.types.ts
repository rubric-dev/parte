import { DialogProps } from '../Dialog/Dialog.types';

export interface DialogModalProps extends Omit<DialogProps, 'close'> {
  preventBodyScrolling?: boolean;
  shouldAutoFocus?: boolean;
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  isShown: boolean;
  onCloseComplete?: () => void;
  onOpenComplete?: () => void;
  sideOffset?: string;
  topOffset?: string;
}
