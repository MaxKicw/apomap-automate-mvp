import { Auth } from "aws-amplify";
import type { NextRouter } from "next/router";

export const useAuth = (router?: NextRouter) => {
  const logOut = async () => {
    await Auth.signOut();
    router?.replace("/");
  };
  const deleteUser = async () => {
    try {
      await Auth.deleteUser();
      router?.replace("/");
    } catch (error) {
      console.log("Error deleting user", error);
    }
  };
  return { logOut, deleteUser };
};
