import type { FunctionComponent } from "react";
import { useStore } from "../../hooks/useStore";
import { SignInModal } from "./SignInModal/SignInModal";
import { SignUpModal } from "./SignUpModal/SignUpModal";

export const DialogManager: FunctionComponent = () => {
  const store = useStore();
  switch (store.shownDialog.type) {
    case "signUpModal":
      return <SignUpModal />;
    case "signInModal":
      return <SignInModal />;
    default:
      return <div></div>;
  }
};
