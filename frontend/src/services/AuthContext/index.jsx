import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const login = async (token) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);

        await fetchUser();
    };
    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUser(null);
    };
    const fetchUser = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }
            const res = await axios.get(`${API_URL}/author/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUser(res.data);
        } catch (err) {
            console.log("Fetch user failed:", err);
            setUser(null);
            localStorage.removeItem("token");
            setIsLoggedIn(false);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchUser(); 
    }, []);
    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            user,
            loading,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}