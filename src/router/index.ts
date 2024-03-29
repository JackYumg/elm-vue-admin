import { RouteRecordRaw , createRouter, createWebHashHistory} from "vue-router";
import { mainRoutes } from "./main/main.router";
import { passportRoutes } from "./passport";
export const rootRoutes: RouteRecordRaw[] = [
    { path: '/', redirect: '/passport' },
    {
        ...passportRoutes
    },
    {
       name: 'main', path: '/main', component: () => import('@pages/main/main.page'), children: [
            ...mainRoutes
        ]
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: rootRoutes
});