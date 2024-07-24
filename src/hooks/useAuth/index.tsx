import { useEffect, useState } from "react";
import useSWR from "swr";
import { apiFetchUser, apiLogin, apiResetPassword } from "../../api/fetchers";
import {
  LoginPayload,
  ResetPasswordPayload,
  ResetPasswordResponse,
  UserResponse,
} from "./types";

const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    localStorage.getItem("accessToken")
  );

  const { data: user, error } = useSWR<UserResponse>(
    accessToken ? ["user", accessToken] : null,
    ([, token]: [string, string]) => apiFetchUser(token),
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onError: (err) => {
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("accessToken");
          setAccessToken(null);
        }
      },
    }
  );

  const loginUser = async (payload: LoginPayload): Promise<UserResponse> => {
    const response = await apiLogin(payload.username, payload.password);
    if (response.status_code === 200 && response.data.access_token) {
      localStorage.setItem("accessToken", response.data.access_token);
      setAccessToken(response.data.access_token);
    }

    return response;
  };

  const changePassword = async (
    payload: ResetPasswordPayload
  ): Promise<ResetPasswordResponse> => {
    const response = await apiResetPassword(
      payload.old_password,
      payload.new_password,
      payload.confirmation_password
    );

    return response;
  };

  const userData = user?.data.user;

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken]);

  return {
    user: userData,
    loginUser,
    isLoading: !error && !user,
    isError: error,
    isAuthenticated: !!accessToken,
    changePassword,
  };
};

export default useAuth;
