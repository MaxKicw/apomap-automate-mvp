import { type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import nextI18nConfig from "../../../next-i18next.config.mjs";
import { CodeConfirmationForm } from "../../features/auth/CodeConfirmationForm";
import { AuthLayout } from "../../features/auth/AuthLayout";

const Confirm: NextPage = () => {
  return (
    <AuthLayout>
      <CodeConfirmationForm close={false} />
    </AuthLayout>
  );
};

export default Confirm;

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
