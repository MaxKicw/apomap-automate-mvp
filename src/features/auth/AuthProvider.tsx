import type { FunctionComponent } from "react";
import { useEffect } from "react";
import { useStore } from "../../hooks/useStore";
import { Auth } from "aws-amplify";

export interface AuthProviderProps {
  children: React.ReactElement;
}

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const store = useStore();
  const getCurrentUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return children;
};
