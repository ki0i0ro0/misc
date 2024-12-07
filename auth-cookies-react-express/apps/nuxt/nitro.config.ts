import { defineNitroConfig } from "nitropack/config";

// https://nitro.unjs.io/config#devproxy
// https://github.com/http-party/node-http-proxy#options
export default defineNitroConfig({
  devProxy: {
    "/api/": {
      target: "http://localhost:3000",
      changeOrigin: true,
    },
  },
});
