import useSWR from "swr";
import {
  apiChangePasswordByAdmin,
  apiCreateUser,
  apiEditUser,
  apiFetchUserList,
} from "../../api/fetchers";
import {
  CreateUserPayload,
  CreateUserResponse,
  EditUserPayload,
  EditUserResponse,
  ListUserResponse,
  ResetPasswordPayload,
  ResetPasswordResponse,
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

  const editUser = async (
    payload: EditUserPayload
  ): Promise<EditUserResponse> => {
    const response = await apiEditUser(payload);

    return response;
  };

  const resetPasswordUser = async (
    payload: ResetPasswordPayload
  ): Promise<ResetPasswordResponse> => {
    const response = await apiChangePasswordByAdmin(payload);

    return response;
  };

  const listUser = user?.data.users || [];

  return {
    listUser,
    isLoading,
    createUser,
    mutateUser: mutate,
    editUser,
    resetPasswordUser,
  };
};

export default useUser;
