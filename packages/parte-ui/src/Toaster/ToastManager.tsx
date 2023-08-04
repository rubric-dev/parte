import { memo, useCallback, useRef, useState } from "react";
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
  const idCounter = useRef(0);

  const removeToast = useCallback((id: number | string) => {
    setToasts((prev) =>
      prev.filter((toast) => !String(toast.id).startsWith(String(id)))
    );
  }, []);

  const closeToast = (id: number | string) => {
    setToasts(
      toasts.map((toast) => {
        if (toast.id === id) {
          return {
            ...toast,
            isShown: false,
          };
        }

        return toast;
      })
    );
  };

  const safeCloseToast = (id: number | string) => {
    const toastToRemove = toasts.find(
      (toast) => String(toast.id) === String(id)
    );

    if (toastToRemove) {
      closeToast(toastToRemove.id);
    }
  };

  const createToastInstance = (passedProps: ToastParams): ToastState => {
    const { title, children, status, duration } = passedProps;
    const uniqueId = idCounter.current;
    idCounter.current += 1;

    const fixedId = uniqueId;

    return {
      id: fixedId,
      title,
      children,
      close: () => safeCloseToast(fixedId),
      status,
      duration,
    };
  };

  const notify: NotifyHandler = (toastState) => {
    const newToast = createToastInstance(toastState);
    setToasts((t) => [newToast, ...t]);
    return newToast.id;
  };

  const popToast = () => {
    const len = toasts.length;
    if (len === 0) return;
    const removeId = toasts[toasts.length - 1].id;
    safeCloseToast(removeId);
  };

  bindNotify(notify);
  bindRemove(safeCloseToast);
  bindPop(popToast);

  return (
    <Styled.ToastContainer>
      {toasts.map((toast) => {
        return <Toast key={toast.id} toast={toast} onRemove={removeToast} />;
      })}
    </Styled.ToastContainer>
  );
});

ToastManager.displayName = "ToastManager";
