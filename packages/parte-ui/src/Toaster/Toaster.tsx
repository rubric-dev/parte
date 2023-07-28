import ReactClientDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "../@foundations/theme";
import { ToastManager } from "./ToastManager";
import { NotifyHandler, PopHandler, RemoveHandler } from "./Toaster.types";

/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */

interface IToaster {
  notify: NotifyHandler;
  remove: RemoveHandler;
  pop: PopHandler;
}

export class Toaster implements IToaster {
  private $notifyHandler: NotifyHandler = () => 0;
  private $removeHandler: RemoveHandler = () => {};
  private $popHandler: PopHandler = () => {};

  constructor() {
    const canUseDom = Boolean(typeof window !== "undefined" && window.document);
    if (!canUseDom) return;

    const container = document.createElement("div");
    container.setAttribute("toaster-container", "");
    document.body.appendChild(container);

    const Manager = () => {
      return (
        <ThemeProvider theme={theme}>
          <ToastManager
            bindNotify={this._bindNotify}
            bindRemove={this._bindRemove}
            bindPop={this._bindPop}
          />
        </ThemeProvider>
      );
    };

    ReactClientDOM.createRoot(container).render(<Manager />);
  }

  private _bindNotify = (handler: NotifyHandler) => {
    this.$notifyHandler = handler;
  };

  private _bindRemove = (handler: RemoveHandler) => {
    this.$removeHandler = handler;
  };
  private _bindPop = (handler: PopHandler) => {
    this.$popHandler = handler;
  };

  notify: NotifyHandler = (toastProps) => {
    return this.$notifyHandler(toastProps);
  };

  remove: RemoveHandler = (id) => {
    return this.$removeHandler(id);
  };
  pop: PopHandler = () => {
    return this.$popHandler();
  };
}
