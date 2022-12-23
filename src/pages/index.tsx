import { type NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import nextI18nConfig from "../../next-i18next.config.mjs";
import Image from "next/image.js";
import logo from "../../public/img/logo.png";
import { Button, Space } from "@mantine/core";

export interface SignInBoxProps {
  auth?: any;
}

const Home: NextPage = () => {
  return (
    <div className="flex h-[600px] w-full flex-col bg-primary-500 bg-opacity-20">
      <div className="item-center flex flex-row justify-between p-4">
        <div>
          <Image src={logo} alt="apomap logo" width={90} />
        </div>
        <div className="flex flex-row">
          <Button radius="xl" color="gray" variant="filled">
            Sign in
          </Button>
          <Space w="sm" />
          <Button radius="xl" color="blue" variant="filled">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

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
