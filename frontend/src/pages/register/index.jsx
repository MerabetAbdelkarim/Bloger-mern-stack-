import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { register } from "../../services/register/authRegisterService";
import { schemaRegister } from "../../services/register/schemaRegister";
import Toast from "../../components/toast/Toast";
import { useNavigate } from "react-router-dom";


function Register() {
  const toastRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaRegister),
    mode: "all",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      await register(formData);
      reset();
      toastRef.current("Registration successful!", true);
      navigate('/login');
    } catch (error) {
      console.error("Error while creating author:", error);
      toastRef.current(error.response.data, false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Create author account</h2>
      <div className="col-6 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <input
            type="text"
            className={`form-control m-1 ${errors.name ? "is-invalid" : ""}`}
            placeholder="Name"
            {...registerForm("name")}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}

          <input
            type="text"
            className={`form-control m-1 ${errors.lastname ? "is-invalid" : ""}`}
            placeholder="Lastname"
            {...registerForm("lastname")}
          />
          {errors.lastname && <div className="invalid-feedback">{errors.lastname.message}</div>}

          <input
            type="text"
            className={`form-control m-1 ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email"
            {...registerForm("email")}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}

          <input
            type="password"
            className={`form-control m-1 ${errors.password ? "is-invalid" : ""}`}
            placeholder="Password"
            {...registerForm("password")}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}

          <input
            type="file"
            className={`form-control m-1 ${errors.image ? "is-invalid" : ""}`}
            {...registerForm("image")}
          />
          {errors.image && <div className="invalid-feedback">{errors.image.message}</div>}

          <textarea
            cols="30"
            rows="4"
            className={`form-control m-1 ${errors.about ? "is-invalid" : ""}`}
            placeholder="About"
            {...registerForm("about")}
          />
          {errors.about && <div className="invalid-feedback">{errors.about.message}</div>}

          <button type="submit" className="btn btn-dark form-control m-1" disabled={isLoading}>
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>

      <Toast ref={toastRef} />
    </div>
  );
}

export default Register;
