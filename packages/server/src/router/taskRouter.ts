import { trpc } from "../lib/trps.js";
import { prisma } from "../db/index.js";
import { z } from "zod";

export const taskRouter = trpc.router({
  list: trpc.procedure.query(() => {
    return prisma.task.findMany();
  }),
  create: trpc.procedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(({ input }) => {
      const { title, description } = input;
      return prisma.task.create({
        data: {
          title,
          description,
          isCompleted: false,
        },
      });
    }),
});
