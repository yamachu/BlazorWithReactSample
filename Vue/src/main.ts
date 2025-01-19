import { createApp } from "vue";
import App from "./App.vue";

// @ts-ignore
window.Blazor.start().then((_) => {
  createApp(App).mount("#app");
});
