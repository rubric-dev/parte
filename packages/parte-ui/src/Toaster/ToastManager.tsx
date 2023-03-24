import { memo, useRef, useState } from "react";
import { Toast } from "./Toast";
import {
  NotifyHandler,
  RemoveHandler,
  ToastState,
  ToastParams,
} from "./Toaster.types";

import * as Styled from "./ToastManager.styled";

type ToastManagerProps = {
  bindNotify: (handler: NotifyHandler) => void;
  bindRemove: (hanlder: RemoveHandler) => void;
};

export const ToastManager = memo(function ({
  bindNotify,
  bindRemove,
}: ToastManagerProps) {
  const [toasts, setToasts] = useState<ToastState[]>([]);
  const idCounter = useRef(0);

  const removeToast = (id: number | string) => {
    const updatedToasts = toasts.filter(
      (toast) => !String(toast.id).startsWith(String(id))
    );

    setToasts(updatedToasts);
    return updatedToasts;
  };

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
    const { title, description, status } = passedProps;
    const uniqueId = idCounter.current;
    idCounter.current += 1;

    const fixedId = uniqueId;

    return {
      id: fixedId,
      title,
      description: description ?? "",
      close: () => safeCloseToast(fixedId),
      status,
    };
  };

  const notify: NotifyHandler = (toastState) => {
    const tempToasts = toasts;

    const instance = createToastInstance(toastState);
    setToasts([instance, ...tempToasts]);
  };

  bindNotify(notify);
  bindRemove(safeCloseToast);

  return (
    <Styled.ToastContainer>
      {toasts.map((toast) => {
        return (
          <Toast
            key={toast.id}
            toast={toast}
            onRemove={() => removeToast(toast.id)}
          />
        );
      })}
    </Styled.ToastContainer>
  );
});
