import { EventEmitter } from "events";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

const ee = new EventEmitter();

export const subscribeRouter = createTRPCRouter({
  onAdd: publicProcedure.query<string>(async () => {
    ee.removeAllListeners("add");
    const ret = new Promise<string>((resolve) => {
      ee.on("add", (data: any) => {
        resolve(String(data));
      });
    });
    return await ret;
  }),
  add: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(({ input }) => {
      console.log(input.text);
      ee.emit("add", input.text);
      return "post";
    }),
});
