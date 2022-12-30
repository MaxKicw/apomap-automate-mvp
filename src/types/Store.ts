import type { DialogSource } from "./DialogSource";
import type { CognitoUser } from "@aws-amplify/auth";
export interface Store {
  number: number;
  increase: (input: number) => void;
  decrease: (input: number) => void;
  shownDialog: DialogSource;
  closeDialog: () => void;
  showDialog: ({ type }: { type: string }) => void;
  user: CognitoUser | null;
  setUser: (user: CognitoUser) => void;
}
