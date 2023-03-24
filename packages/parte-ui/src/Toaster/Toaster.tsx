import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../@foundations/theme";
import { NotifyHandler, RemoveHandler } from "./Toaster.types";
import { ToastManager } from "./ToastManager";

/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */

interface IToaster {
  notifyHandler: NotifyHandler;
  removeHandler: RemoveHandler;
}

const getMajorVersion = (version: string) => {
  const majorVersion = parseInt(version, 10);
  return majorVersion;
};

export class Toaster implements IToaster {
  notifyHandler: NotifyHandler = () => {};
  removeHandler: RemoveHandler = () => {};

  constructor() {
    const canUseDom = Boolean(typeof window !== "undefined" && window.document);
    if (!canUseDom) return;

    const container = document.createElement("div");
    container.setAttribute("toaster-container", "");
    document.body.appendChild(container);

    const toastManager = () => {
      return (
        <ThemeProvider theme={theme}>
          <ToastManager
            bindNotify={this._bindNotify}
            bindRemove={this._bindRemove}
          />
        </ThemeProvider>
      );
    };

    if (getMajorVersion(ReactDOM.version) >= 18) {
      try {
        const { createRoot } = require("react-dom/client");
        const root = createRoot(container);

        root.render(toastManager());
      } catch (e) {
        ReactDOM.render(toastManager(), container);
      }
      return;
    }

    ReactDOM.render(toastManager(), container);
  }

  _bindNotify = (handler: NotifyHandler) => {
    this.notifyHandler = handler;
  };

  _bindRemove = (handler: RemoveHandler) => {
    this.removeHandler = handler;
  };

  notify: NotifyHandler = (toastProps) => {
    return this.notifyHandler(toastProps);
  };

  remove: RemoveHandler = (id) => {
    return this.removeHandler(id);
  };
}
