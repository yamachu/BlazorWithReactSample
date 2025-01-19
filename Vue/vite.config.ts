import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // Debug時一旦ここにコピーする
    // TODO: ReleaseやPublish時のディレクトリ指定
    outDir: "../BlazorWebAssembly/bin/Debug/net6.0/wwwroot",
  },
});
