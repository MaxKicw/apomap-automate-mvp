import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import type { FunctionComponent } from "react";
import { withAuth } from "../hocs/withAuth";
import type { GetServerSidePropsContext } from "next";
import { Button, Text } from "@mantine/core";

import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Dashboard: FunctionComponent = () => {
  const router = useRouter();
  const { logOut } = useAuth(router);
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-full flex-row items-center justify-center  bg-primary-500 bg-opacity-20">
      <Text>{t("dashboard.title")}</Text>
      <Button onClick={async () => await logOut()} radius="xl">
        LogOut
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

export default Dashboard;
