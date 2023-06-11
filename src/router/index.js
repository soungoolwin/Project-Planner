import { createRouter, createWebHistory } from "vue-router";
import Projects from "../views/Projects.vue";
import AddProject from "../views/AddProject.vue";

const routes = [
  {
    path: "/",
    name: "projects",
    component: Projects,
  },
  {
    path: "/add-project",
    name: "addproject",
    component: AddProject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
