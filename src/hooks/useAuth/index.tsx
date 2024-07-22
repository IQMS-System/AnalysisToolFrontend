import { useEffect, useState } from "react";
import useSWR from "swr";
import { apiFetchUser, apiLogin } from "../../api/fetchers";
import { AuthResponse, LoginPayload } from "./types";

const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    localStorage.getItem("accessToken")
  );

  const { data: user, error } = useSWR(
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

  const loginUser = async (payload: LoginPayload): Promise<AuthResponse> => {
    const response = await apiLogin(payload.username, payload.password);
    if (response.status_code === 200 && response.data.access_token) {
      localStorage.setItem("accessToken", response.data.access_token);
      setAccessToken(response.data.access_token);
    }

    return response;
  };

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken]);

  return {
    user,
    loginUser,
    isLoading: !error && !user,
    isError: error,
  };
};

export default useAuth;
