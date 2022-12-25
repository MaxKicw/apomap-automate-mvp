import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  getDefaultCommands: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.commandOptions.findMany({
        where: { default: true },
        select: {
          id: true,
          title: true,
          shortCut: true,
          endpoint: true,
          function: true,
        },
      });
    } catch (error) {
      console.error("error", error);
    }
  }),
});
