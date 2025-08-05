import { trpc } from "../lib/trps.js";
import { taskRouter } from "./taskRouter.js";

export const appRouter = trpc.router({
  task: taskRouter,
});

export type AppRouter = typeof appRouter;
