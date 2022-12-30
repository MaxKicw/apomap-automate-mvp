import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";
import type { FunctionComponent } from "react";
import type { GetServerSidePropsContext } from "next";

import { useRouter } from "next/router";
import { withAuth } from "../../hocs/withAuth";
import { useTranslation } from "next-i18next";
import { Button } from "@mantine/core";
import { useAuth } from "../../hooks/useAuth";

const Onboarding: FunctionComponent = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { deleteUser } = useAuth(router);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center  bg-primary-500 bg-opacity-20">
      <p>{t("onboarding.title")}</p>
      <Button onClick={() => deleteUser()} radius="xl">
        {t("common.terms.back")}
      </Button>
    </div>
  );
};

export const getServerSideProps = withAuth(
  async (context: GetServerSidePropsContext) => {
    const res = await serverSideTranslations(
      context.locale!,
      ["common"],
      nextI18nConfig,
      ["en", "de"]
    );

    return {
      props: {
        ...res,
      },
    };
  }
);

export default Onboarding;
