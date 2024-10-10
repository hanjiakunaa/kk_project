import Layout from '@/layout/Index.vue';
export const basicRoutes = [
  {
    path: '/',
    redirect: '/',
    component: Layout,
    alias: '/home',
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine/index.vue'),
        meta: {
          title: '我的',
        },
      },
    ],
  },
  {
    // 404
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: '错误页面' },
    component: () => import('@/layout/NotFound.vue'),
  },
];
