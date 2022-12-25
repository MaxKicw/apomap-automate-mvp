import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";

export const appRouter = router({
  public: exampleRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
