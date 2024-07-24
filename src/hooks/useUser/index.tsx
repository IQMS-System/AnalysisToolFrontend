import useSWR from "swr";
import { apiFetchUserList } from "../../api/fetchers";
import { ListUserResponse } from "./types";

const useUser = () => {
  const { data: user, isLoading } = useSWR<ListUserResponse>(
    "/api/users",
    apiFetchUserList,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onError: (err) => {
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("accessToken");
        }
      },
    }
  );

  const listUser = user?.data.users || [];

  return {
    listUser,
    isLoading,
  };
};

export default useUser;
