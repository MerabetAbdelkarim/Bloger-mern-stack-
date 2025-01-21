import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const { user, isLoading } = useContext(UserContext);
    console.log("user k", user);
    console.log("isLoading k", isLoading);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;