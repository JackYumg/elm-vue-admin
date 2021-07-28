import { RouteRecordRaw } from "vue-router";
import mainPage from "../pages/main/main.page";
import { mainRoutes } from "./main/main.router";
import { passportRoutes } from "./passport";
export const rootRoutes: RouteRecordRaw[] = [
    { path: '/', redirect: 'passport' },
    {
        ...passportRoutes
    },
    {
        path: '/main', component: mainPage, children: [
            ...mainRoutes
        ]
    }
];