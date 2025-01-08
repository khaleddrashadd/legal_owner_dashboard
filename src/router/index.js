import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
    {
      path: '/',
      name: 'public',
      component: () => import('../layouts/AppLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/statistics',
          name: 'statistics',
          component: () => import('@/views/reports/StatisticsView.vue')
        },
        {
          path: '/payments',
          name: 'payments',
          component: () => import('@/views/reports/PaymentsView.vue')
        },
        {
          path: '/accounts',
          name: 'accounts',
          component: () => import('@/views/reports/StatisticsView.vue')
        },
        {
          path: '/collections',
          name: 'collections',
          component: () => import('@/views/reports/StatisticsView.vue')
        }
      ],

      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach(async (to) => {
  const accessToken = localStorage.getItem('accessToken');

  if (to.meta.requiresAuth && !accessToken) {
    return '/login';
  }
  if (to.name === 'login' && accessToken) {
    try {
      await Auth.getToken();
      return '/';
    } catch (e) {
      console.log(e);
    }
  }
});

export default router;
