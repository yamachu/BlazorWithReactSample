import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  define: {},
  build: {
    // Debug時一旦ここにコピーする
    // TODO: ReleaseやPublish時のディレクトリ指定
    outDir: "../BlazorWebAssembly/bin/Debug/net6.0/wwwroot",
  },
});
