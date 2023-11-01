/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { EventEmitter } from "events";
import { observable } from "@trpc/server/observable";
import { set, z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
// create a global event emitter (could be replaced by redis, etc)
const ee = new EventEmitter();
const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const subscribeRouter = createTRPCRouter({
  onAdd: publicProcedure.query(async () => {
    let res = "null";
    const onAdd = (data: any) => {
      // emit data to client
      console.log("■■■■■■■■■■■■■", data);
      res = data;
    };
    // trigger `onAdd()` when `add` is triggered in our event emitter
    ee.on("add", onAdd);
    // unsubscribe function when client disconnects or stops subscribing
    // ee.off('add', onAdd);
    await sleep(3000);
    console.warn("■■■■■■■■■■■■■");

    return res;
  }),
  add: publicProcedure.mutation(() => {
    const post = "test"; /* [..] add to db */

    ee.emit("add", post);
    return post;
  }),
});
