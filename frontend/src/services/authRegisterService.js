import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/author/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Registration Error:', error);
        throw error;
    }
};