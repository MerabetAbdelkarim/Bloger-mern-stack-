import { useContext } from "react";
import { AuthContext } from "../services/AuthContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
    const { user, isLoggedIn, loading } = useContext(AuthContext);

    if (loading) {
        return <div style={{ textAlign: "center", padding: 30 }}>Loading...</div>;
    }

    if (!isLoggedIn || !user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
