import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
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
      component: () => import('employee/EmployeeListView'),
    },
    {
      path: '/cms',
      name: 'cms',
      component: () => import('../views/CmsView.vue'),
    },
  ],
});

export default router;
