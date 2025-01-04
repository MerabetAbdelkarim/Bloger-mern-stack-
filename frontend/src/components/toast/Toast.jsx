import { forwardRef, useImperativeHandle, useRef } from "react";

const Toast = forwardRef((_, ref) => {
    const toastRef = useRef(null);

    const showToast = (message, isSuccess) => {
        const toastElement = toastRef.current;
        if (toastElement) {
            const toastBody = toastElement.querySelector(".toast-body");
            const toastHeader = toastElement.querySelector(".toast-header strong");

            toastBody.textContent = message;
            toastHeader.textContent = isSuccess ? "Success" : "Error";

            toastElement.classList.remove("bg-success", "bg-danger", "text-white");
            toastElement.classList.add(
                isSuccess ? "bg-success" : "bg-danger",
                "text-white"
            );

            const toast = new window.bootstrap.Toast(toastElement, {
                animation: true,
                autohide: true,
                delay: 3000
            });
            toast.show();
        }
    };

    useImperativeHandle(ref, () => showToast);

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div
                ref={toastRef}
                id="liveToast"
                className="toast border-0 shadow-lg"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="toast-header border-0">
                    <strong className="me-auto"></strong>
                    <small className="text-muted">Just now</small>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="toast-body"></div>
            </div>
        </div>
    );
});

Toast.displayName = "Toast";

export default Toast;