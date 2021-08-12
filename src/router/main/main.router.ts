import { RouteRecordRaw } from "vue-router";
export const mainRoutes: RouteRecordRaw[] = [
    { path: '', redirect: '/main/dashboard' },
    {
        path: 'dashboard', component: () => import('@pages/main/dashboard/Dashboard.page'),
        children: [
            { path: '', redirect: '/main/dashboard/default' },
            { path: 'default', component: () => import('@pages/main/dashboard/Default.page') },
            { path: 'analyze', component: () => import('@pages/main/dashboard/Anaylze.page') }
        ]
    }
];