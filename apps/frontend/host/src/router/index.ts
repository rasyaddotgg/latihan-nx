import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout.vue';
import { getAsyncComponent } from '../lib/helpers/federation/module_federation.ext';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AuthenticatedLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/employee-list',
      name: 'employee-list',
      component: () =>
        getAsyncComponent(
          'employeeList',
          'http://localhost:4300/assets/employee.js'
        ),
    },
    {
      path: '/cms',
      component: () => import('../layouts/CMSLayout.vue'),
      children: [
        {
          path: '',
          name: 'cms',
          component: () => import('../views/CmsView.vue'),
        },
      ],
    },
  ],
});

export default router;
