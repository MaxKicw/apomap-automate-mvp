import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config.mjs";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Wrapper from "../features/core/Wrapper";
import { MantineProvider } from "@mantine/core";

import { DialogManager } from "../features/dialog/DialogManger";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SessionProvider session={session}>
        <Wrapper>
          <DialogManager />
          <Component {...pageProps} />
        </Wrapper>
      </SessionProvider>
    </MantineProvider>
  );
};

const I18nApp = appWithTranslation(MyApp, nextI18nConfig);
const TRPCApp = trpc.withTRPC(I18nApp);

export default TRPCApp;
