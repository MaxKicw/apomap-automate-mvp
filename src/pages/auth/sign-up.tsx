import { type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import nextI18nConfig from "../../../next-i18next.config.mjs";
import { SignUpForm } from "../../features/auth/SignUpForm";
import { AuthLayout } from "../../features/auth/AuthLayout";

const SignUp: NextPage = () => {
  return (
    <AuthLayout>
      <SignUpForm close={false} />
    </AuthLayout>
  );
};

export default SignUp;

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
