import {
  CreateUserPayload,
  EditUserPayload,
  ResetPasswordPayload,
} from "../hooks/useUser/types";
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

export const apiFetchUser = async () => {
  const response = await apiClient.get(`${API_URL}/profile`);
  return response.data;
};

export const apiFetchUserList = async () => {
  const response = await apiClient.get(`${API_URL}/user-configuration`);
  return response.data;
};

export const apiCreateUser = async (payload: CreateUserPayload) => {
  const response = await apiClient.post(
    `${API_URL}/user-configuration/create-user/`,
    {
      ...payload,
    }
  );

  return response.data;
};

export const apiEditUser = async (payload: EditUserPayload) => {
  const response = await apiClient.post(
    `${API_URL}/user-configuration/update-user/`,
    {
      ...payload,
    }
  );

  return response.data;
};

export const apiChangePasswordByAdmin = async (
  payload: ResetPasswordPayload
) => {
  const response = await apiClient.post(
    `${API_URL}/user-configuration/reset-password/`,
    {
      ...payload,
    }
  );

  return response.data;
};
