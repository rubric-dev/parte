import { memo, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "./Toast";
import {
  NotifyHandler,
  PopHandler,
  RemoveHandler,
  ToastParams,
  ToastState,
} from "./Toaster.types";

import * as Styled from "./ToastManager.styled";

type ToastManagerProps = {
  bindNotify: (handler: NotifyHandler) => void;
  bindRemove: (hanlder: RemoveHandler) => void;
  bindPop: (hanlder: PopHandler) => void;
};

export const ToastManager = memo(function ({
  bindNotify,
  bindRemove,
  bindPop,
}: ToastManagerProps) {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const closeToast = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id
          ? {
              ...toast,
              isShown: false,
            }
          : toast
      )
    );
  }, []);

  const createToastInstance = (passedProps: ToastParams): ToastState => {
    const { title, children, status, duration, customId } = passedProps;
    const uniqueId = uuidv4();

    return {
      id: customId || uniqueId,
      title,
      children,
      close: () => closeToast(uniqueId),
      status,
      duration,
    };
  };

  const notify: NotifyHandler = (toastState) => {
    const newToast = createToastInstance(toastState);
    setToasts((t) => [newToast, ...t]);
    return newToast.id;
  };

  const popToast = useCallback(() => {
    let toast: ToastState | null = null;

    setToasts((prev) => {
      if (prev.length > 0) {
        toast = prev[prev.length - 1];
        const targetId = toast.id;
        return prev.map((toast) =>
          toast.id === targetId
            ? {
                ...toast,
                isShown: false,
              }
            : toast
        );
      }
      return prev;
    });
    return toast;
  }, []);

  bindNotify(notify);
  bindRemove(closeToast);
  bindPop(popToast);

  return (
    <Styled.ToastContainer>
      {toasts.map((toast) => {
        return <Toast key={toast.id} toast={toast} onRemove={closeToast} />;
      })}
    </Styled.ToastContainer>
  );
});

ToastManager.displayName = "ToastManager";
