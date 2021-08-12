import { RouteRecordRaw } from "vue-router";
import AnaylzePage from "../../pages/main/dashboard/Anaylze.page";
import DashboardPage from "../../pages/main/dashboard/Dashboard.page";
import DefaultPage from "../../pages/main/dashboard/Default.page";
export const mainRoutes: RouteRecordRaw[] = [
    { path: '' , redirect: '/main/dashboard'},
    {
        path: 'dashboard', component: DashboardPage,
        children: [
            { path: '' , redirect: '/main/dashboard/default'},
            { path: 'default', component: DefaultPage },
            { path: 'analyze' , component: AnaylzePage}
        ]
    }
];