import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyLib",
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react"], // バンドルしたくない依存関係を指定
      output: {
        globals: {
          react: "React", // UMDビルド時に、external指定した依存関係をscript タグで読み込まれた場合に使用される変数名を指定
        },
      },
    },
  },
  plugins: [react()],
})
