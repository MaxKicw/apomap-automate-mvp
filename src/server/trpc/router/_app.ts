import { router } from "../trpc";
import { exampleRouter } from "./example";
import { protectedRouter } from "./protectedRouter";

export const appRouter = router({
  public: exampleRouter,
  protected: protectedRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
