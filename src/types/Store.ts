import type { DialogSource } from "./DialogSource";
import type { CognitoUser } from "@aws-amplify/auth";
import type { Account } from "@prisma/client";
export interface Store {
  number: number;
  increase: (input: number) => void;
  decrease: (input: number) => void;
  shownDialog: DialogSource;
  closeDialog: () => void;
  showDialog: ({ type }: { type: string }) => void;
  account: Account | null;
  user: CognitoUser | null;
  setUser: (user: CognitoUser) => void;
  setAccount: (account: Account) => void;
}
