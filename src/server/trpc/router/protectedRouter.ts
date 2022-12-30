import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const protectedRouter = router({
  getAccountData: protectedProcedure.query(async ({ ctx }) => {
    try {
      const id = ctx.user?.getUsername();
      return await ctx.prisma.account.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error("error", error);
      return null;
    }
  }),
  createAccount: protectedProcedure
    .input(z.object({ businessName: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.account.create({
          data: {
            businessName: input.businessName,
            email: ctx.user?.attributes?.email ?? "",
            id: ctx.user?.attributes?.sub ?? "",
          },
        });
      } catch (error) {
        console.error("error", error);
      }
    }),
  createTask: protectedProcedure
    .input(
      z.object({ customerName: z.string(), lon: z.number(), lat: z.number() })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.task.create({
          data: {
            customerName: input.customerName,
            lat: input.lat,
            lon: input.lon,
            ownerId: ctx.user.getUsername(),
          },
        });
      } catch (error) {
        console.error("error", error);
      }
    }),
});
