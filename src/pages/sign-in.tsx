import { clsx, Container } from "@mantine/core";
import type { FunctionComponent } from "react";

export interface SignInProps {
  auth?: any;
}

const SignIn: FunctionComponent<SignInProps> = ({}) => {
  return (
    <Container
      className={clsx("flex h-[100vh] w-[100vw] items-center justify-center")}
    >
      <Container
        className={clsx(" h-[500px] w-[50%] rounded-xl bg-white shadow-xl")}
      ></Container>
    </Container>
  );
};

export default SignIn;
