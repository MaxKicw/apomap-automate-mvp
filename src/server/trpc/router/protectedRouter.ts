import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const protectedRouter = router({
  getAccountData: protectedProcedure.query(async ({ ctx }) => {
    try {
      const id = ctx.user?.getUsername();
      return await ctx.prisma.user.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error("error", error);
      return null;
    }
  }),
});
