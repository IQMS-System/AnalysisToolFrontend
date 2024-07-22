import axios from "axios";

const API_URL = 'http://127.0.0.1:8000'

export const apiLogin = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login/`, { username, password });
    return response.data;
};

export const apiFetchUser = async (accessToken: string) => {
    const response = await axios.get(`${API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
};