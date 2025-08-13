export function withAuthStatus(WrappedComponent) {
    return function AuthAwareComponent(props) {
        const token = localStorage.getItem("token");
        const isLoggedIn = !!token;

        return <WrappedComponent {...props} isLoggedIn={isLoggedIn} />;
    };
}
