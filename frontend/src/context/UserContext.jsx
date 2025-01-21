import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;
export const UserContext = createContext();
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const loginContext = async (userData) => {
        console.log("userData", userData);
        localStorage.setItem('token', userData.token);
        try {
            const response = await axios.get(`${API_URL}/author/profile`, {
                headers: {
                    Authorization: `Bearer ${userData.token}`,
                },
            });
            setUser(response.data);
        } catch (error) {
            setIsLoading(false);
            console.error("Failed to fetch user data:", error);
        } finally {
            console.log("finally user", user);
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            loginContext({ token });
        }
    }, []);
    return (
        <UserContext.Provider value={{ user, isLoading, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
};