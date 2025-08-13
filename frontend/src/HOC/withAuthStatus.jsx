import { useContext } from "react";
import { AuthContext } from "../services/AuthContext";

export function withAuthStatus(WrappedComponent) {
    return function AuthAwareComponent(props) {
        const { isLoggedIn } = useContext(AuthContext);

        return <WrappedComponent {...props} isLoggedIn={isLoggedIn} />;
    };
}
