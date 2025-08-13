import { useState, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../services/login/schemaLogin";
import { authLoginService } from "../../services/login/authLoginService";
import { AuthContext } from "../../services/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const toastRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaLogin),
    mode: "all",
  });

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

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const token = await authLoginService(data);
      login(token);
      reset();
      showToast("Login successful!", true);
    } catch (error) {
      console.error("Login Error:", error.response.data);
      showToast(error.response.data, false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Login to author account</h2>
      <div className="col-6 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className={`form-control m-1 ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}

          <input
            type="password"
            className={`form-control m-1 ${errors.password ? "is-invalid" : ""}`}
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}

          <button type="submit" className="btn btn-dark form-control m-1" disabled={isLoading}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          ref={toastRef}
          className="toast"
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
    </div>
  );
}

export default Login;