import useSWR from "swr";
import { readAllUsers, readoneUser } from "../api/userApi";

export const useOneReadUser = (userID: string) => {
  const { data, isLoading } = useSWR(`read-one-user/${userID}`, () =>
    readoneUser(userID)
  );
  return { data, isLoading };
};

export const useReadUser = () => {
  const { data, isLoading } = useSWR(`users/`, readAllUsers);
  return { data, isLoading };
};
