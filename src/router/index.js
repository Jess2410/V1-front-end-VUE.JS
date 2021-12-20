import { createRouter, createWebHashHistory } from "vue-router";
import DashboardAdmin from "../views/DashboardAdmin.vue";


const routes = [
  {
    path: "/",
    name: "DashboardAdmin",
    component: DashboardAdmin,
  },
  {
    path: "/form_artisan",
    name: "FormArtisan",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FormArtisan.vue"),
  },
  {
    path: "/form_client",
    name: "FormClient",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FormClient.vue"),
  },
  {
    path: "/form_demand",
    name: "FormDemand",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FormDemand.vue"),
  },
  {
    path: "/list_artisans",
    name: "ListArtisans",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListArtisans.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/login_artisan",
    name: "LoginArtisan",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginArtisan.vue"),
  },
  {
    path: "/dashboard_artisan",
    name: "DashboardArtisan",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardArtisan.vue"),
  },
  {
    path: "/list_clients",
    name: "ListClients",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListClients.vue"),
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
