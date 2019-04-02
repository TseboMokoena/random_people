
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/Index.vue') },
      {
        path: '/listPeople',
        name: 'app.listPeople',
        component: () => import('pages/listPeople.vue')
      },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
