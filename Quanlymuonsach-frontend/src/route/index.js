import { createWebHistory, createRouter } from "vue-router";
import ContactBook  from "@/view/ContactBook.vue";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;