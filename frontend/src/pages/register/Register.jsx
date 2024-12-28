import { useRef } from "react";
import { register } from "../../services/authRegisterService";

function Register() {
  const formRef = useRef(null);
  const handelAddAuthor = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const currentFormData = Object.fromEntries(formData.entries());
    console.log("currentFormData", currentFormData);
    const { name, lastname, email, password, image, about } = currentFormData;
    try {
      console.log("open try");
      await register(currentFormData);
      // Here you can add your logic to send the data to the server
      // For example, using fetch or axios to send the form data
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   body: formData,
      // });
      // const result = await response.json();
      // console.log(result);
    } catch (error) {
      console.error("Error while creating author:", error);
    } finally {
      if (formRef.current) {
        formRef.current.reset();
        console.log("Form has been reset.");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Create author account</h2>
      <div className="col-6 mx-auto">
        <form onSubmit={handelAddAuthor} encType="multipart/form-data" ref={formRef}>
          <input type="text" className="form-control m-1" placeholder="name" name="name" />
          <input type="text" className="form-control m-1" placeholder="lastname" name="lastname" />
          <input type="text" className="form-control m-1" placeholder="email" name="email" />
          <input type="password" className="form-control m-1" placeholder="password" name="password" />
          <input type="file" className="form-control m-1" placeholder="image" name="image" />
          <textarea id="" cols="30" rows="4" placeholder="about" className="form-control m-1" name="about"></textarea>
          <button type="submit" className="btn btn-dark form-control m-1">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;