import { EventEmitter } from "events";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
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
  add: publicProcedure.mutation(() => {
    const post = "test";
    ee.emit("add", post);
    return "post";
  }),
});
