import type { FunctionComponent } from "react";
import { useStore } from "../../hooks/useStore";
import { SignUpModal } from "./SignUpModal";

export const DialogManager: FunctionComponent = () => {
  const store = useStore();
  switch (store.shownDialog.type) {
    case "signUpModal":
      return <SignUpModal />;
    default:
      return <div></div>;
  }
};
