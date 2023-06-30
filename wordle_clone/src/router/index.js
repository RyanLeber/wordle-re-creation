import { createRouter, createWebHistory } from "vue-router";
import WordleView from "../views/WordleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Wordle",
      component: WordleView,
    },
  ],
});

export default router;
