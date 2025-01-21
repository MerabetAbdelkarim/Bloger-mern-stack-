import axios from 'axios';
import { createContext, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;
export const UserContext = createContext();
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginContext = async (userData) => {
        localStorage.setItem('token', userData.token);
        try {
            const response = await axios.get(`${API_URL}/author/profile`, {
                headers: {
                    Authorization: `Bearer ${userData.token}`,
                },
            });
            setUser(response.data);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
};