import { z } from "zod";
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
  createCommand: publicProcedure
    .input(
      z.object({
        default: z.boolean(),
        shortCut: z.string(),
        title: z.string(),
        endpoint: z.string().optional(),
        function: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        return await ctx.prisma.commandOptions.create({
          data: {
            default: true,
            shortCut: input.shortCut,
            title: input.title,
            endpoint: input.endpoint,
            function: input.function,
          },
        });
      } catch (error) {
        console.error("error", error);
      }
    }),
});
