import useSWR from "swr";
import { apiCreateUser, apiFetchUserList } from "../../api/fetchers";
import {
  CreateUserPayload,
  CreateUserResponse,
  ListUserResponse,
} from "./types";

const useUser = () => {
  const {
    data: user,
    isLoading,
    mutate,
  } = useSWR<ListUserResponse>("/api/users", apiFetchUserList, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    onError: (err) => {
      if (err.response && err.response.status === 401) {
        localStorage.removeItem("accessToken");
      }
    },
  });

  const createUser = async (
    payload: CreateUserPayload
  ): Promise<CreateUserResponse> => {
    const response = await apiCreateUser(payload);

    return response;
  };

  const listUser = user?.data.users || [];

  return {
    listUser,
    isLoading,
    createUser,
    mutateUser: mutate,
  };
};

export default useUser;
