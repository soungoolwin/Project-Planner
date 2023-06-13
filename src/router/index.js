import { createRouter, createWebHistory } from "vue-router";
import Projects from "../views/Projects.vue";
import AddProject from "../views/AddProject.vue";
import EditProject from "../views/EditProject.vue";

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
  {
    path: "/edit-project/:id",
    name: "editproject",
    component: EditProject,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
