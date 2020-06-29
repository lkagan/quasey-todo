const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', component: () => import('pages/Tasks.vue')},
            {path: '/settings', component: () => import('pages/Settings.vue')},
            {path: '/settings/help', component: () => import('pages/Help.vue')}
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
