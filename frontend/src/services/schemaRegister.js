import * as yup from "yup";

export const schemaRegister = yup.object().shape({
    name: yup.string().required("Name is required"),
    lastname: yup.string().required("Lastname is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    image: yup.mixed().required("Image is required"),
    about: yup.string().required("About is required"),
});