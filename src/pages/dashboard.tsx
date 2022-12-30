import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import type { FunctionComponent } from "react";
import { useEffect } from "react";
import { withAuth } from "../hocs/withAuth";
import type { GetServerSidePropsContext } from "next";
import { Button, Loader, Skeleton, Text, Title } from "@mantine/core";

import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { trpc } from "../utils/trpc";
import { useStore } from "../hooks/useStore";

const Dashboard: FunctionComponent = () => {
  const router = useRouter();
  const { logOut } = useAuth(router);
  const { t } = useTranslation();
  const store = useStore();
  const account = trpc.protected.getAccountData.useQuery();

  if (!account.data) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center  bg-primary-500 bg-opacity-20">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center  bg-primary-500 bg-opacity-20">
      <Title>
        {t("dashboard.title", { businessName: account.data?.businessName })}
      </Title>
      <Button
        className="mt-2"
        radius="xl"
        onClick={() => store.showDialog({ type: "taskModal" })}
      >
        {t("dashboard.createTask")}
      </Button>
      <Button
        variant="subtle"
        className="mt-2"
        onClick={async () => await logOut()}
        radius="xl"
      >
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
