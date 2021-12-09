import { RouteRecordRaw } from "vue-router";
export const mainRoutes: RouteRecordRaw[] = [
    { path: '', redirect: '/main/dashboard' },
    {
        path: 'dashboard', component: () => import('@pages/main/dashboard/Dashboard.page'),
        children: [
            { path: '', redirect: '/main/dashboard/default' },
            { path: 'default', component: () => import('@pages/main/dashboard/Default.page') },
            { path: 'analyze', component: () => import('@pages/main/dashboard/Anaylze.page') },
            { path: 'monitor', component: () => import('@pages/main/dashboard/Monitor.page') },
            { path: 'workplace', component: () => import('@pages/main/dashboard/workplace.page') },
        ]
    },
    {
        path: 'blog', component: () => import('@pages/main/blog/Blog.page'),
        children: [
            { path: 'price-tag', component: () => import('@pages/main/blog/Blog.page') },
            { path: 'document' , component: () => import('@pages/main/blog/passage/Passage.page')}
        ]
    }
];