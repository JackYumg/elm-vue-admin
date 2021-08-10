import { RouteRecordRaw } from "vue-router";
import DashboardPage from "../../pages/main/dashboard/Dashboard.page";
import DefaultPage from "../../pages/main/dashboard/Default.page";
export const mainRoutes: RouteRecordRaw[] = [
    {
        path: 'dashboard', component: DashboardPage,
        children: [
            { path: 'default', component: DefaultPage }
        ]
    }
];