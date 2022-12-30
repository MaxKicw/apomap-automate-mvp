import { type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import nextI18nConfig from "../../../next-i18next.config.mjs";
import { AuthLayout } from "../../features/auth/AuthLayout";
import { SignInForm } from "../../features/auth/SignInForm";

const SignIn: NextPage = () => {
  return (
    <AuthLayout>
      <SignInForm close={false} />
    </AuthLayout>
  );
};

export default SignIn;

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  const res = await serverSideTranslations(locale, ["common"], nextI18nConfig, [
    "en",
    "de",
  ]);

  return {
    props: {
      ...res,
    },
  };
};
