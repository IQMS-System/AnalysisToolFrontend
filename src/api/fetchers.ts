import apiClient from "./axiosConfig";

const API_URL = "http://127.0.0.1:8000";

export const apiLogin = async (username: string, password: string) => {
  const response = await apiClient.post(`${API_URL}/login/`, {
    username,
    password,
  });
  return response.data;
};

export const apiResetPassword = async (
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
) => {
  const response = await apiClient.post(`${API_URL}/reset-password/`, {
    old_password: oldPassword,
    new_password: newPassword,
    confirmation_password: confirmPassword,
  });

  return response.data;
};

export const apiFetchUser = async (accessToken: string) => {
  const response = await apiClient.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
