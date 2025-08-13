import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/author/login`, formData);
        return response?.data?.mytoken;
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};