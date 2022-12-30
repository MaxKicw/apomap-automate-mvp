import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import type { CognitoUser } from "@aws-amplify/auth";

import { prisma } from "../db/client";
import { withSSRContext } from "aws-amplify";

type CreateContextOptions = {
  user: CognitoUser;
};

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    user: opts.user,
    prisma,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req } = opts;
  const { Auth } = withSSRContext({ req });
  let user = null;
  try {
    user = await Auth.currentAuthenticatedUser();
  } catch (error) {}

  return await createContextInner({
    user,
  });
};

export type Context = inferAsyncReturnType<typeof createContext>;
