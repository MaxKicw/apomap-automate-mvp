import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config.mjs";

// Configure Amplify for authentification
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Wrapper from "../features/core/Wrapper";
import { MantineProvider } from "@mantine/core";

import { DialogManager } from "../features/dialog/DialogManger";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Wrapper>
        <DialogManager />
        <Component {...pageProps} />
      </Wrapper>
    </MantineProvider>
  );
};

const I18nApp = appWithTranslation(MyApp, nextI18nConfig);
const TRPCApp = trpc.withTRPC(I18nApp);

export default TRPCApp;
