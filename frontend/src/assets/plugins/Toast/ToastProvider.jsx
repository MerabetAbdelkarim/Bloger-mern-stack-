import { createContext, useRef } from "react";

export const ToastContext = createContext();

// eslint-disable-next-line react/prop-types
export function ToastProvider({ children }) {
    const toastRef = useRef(null);

    const showToast = (message, isSuccess) => {
        const toastElement = toastRef.current;
        if (toastElement) {
            const toastBody = toastElement.querySelector(".toast-body");
            const toastHeader = toastElement.querySelector(".toast-header strong");

            toastBody.textContent = message;
            toastHeader.textContent = isSuccess ? "Success" : "Error";

            toastElement.classList.remove("bg-success", "bg-danger");
            toastElement.classList.add(isSuccess ? "bg-success" : "bg-danger");
            const toast = new window.bootstrap.Toast(toastElement);
            toast.show();
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div
                    ref={toastRef}
                    className="toast toast-custom"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <div className="toast-header">
                        <strong className="me-auto">Message</strong>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="toast-body"></div>
                </div>
            </div>
        </ToastContext.Provider>
    );
}
