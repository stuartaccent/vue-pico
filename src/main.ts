import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { defaultConfig, plugin } from "@formkit/vue";
import { ariaInvalid, fileRemoveLink, helpSmall, removeBoxInnerWrapper } from "@/formkit/plugins";
import "./assets/main.scss";

const app = createApp(App);

app.use(router);

app.use(
  plugin,
  defaultConfig({
    plugins: [ariaInvalid, fileRemoveLink, helpSmall, removeBoxInnerWrapper],
  })
);

app.mount("#app");
