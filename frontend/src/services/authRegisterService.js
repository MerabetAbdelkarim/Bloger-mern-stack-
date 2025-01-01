import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const register = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/author/register`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error('Registration Error:', error);
        throw error;
    }
};