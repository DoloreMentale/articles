const routes = [
  {
    path: '/',
    redirect: ({ name: 'Home' }),
    name: 'MainLayout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'posts',
        name: 'Home',
        component: () => import('pages/Home.vue')
      },
      {
        path: 'history',
        name: 'History',
        component: () => import('pages/History.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
