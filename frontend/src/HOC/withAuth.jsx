import { Navigate } from "react-router-dom";

export function withAuth(WrappedComponent) {
    return function Protected(props) {
        const token = localStorage.getItem("token");
        if (!token) {
            return <Navigate to="/login" />;
        }
        return <WrappedComponent {...props} />;
    };
}
