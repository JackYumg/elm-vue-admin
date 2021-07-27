import { RouteRecordRaw } from "vue-router";
import mainPage from "../pages/main/main.page";
import passportPage from "../pages/passport/passport.page";
import loginPage from "../pages/passport/login/login.page";
import { mainRoutes } from "./main/main.router";
import registerPage from "../pages/passport/register/register.page";
export const rootRoutes: RouteRecordRaw[] = [
    { path: '/', redirect: 'passport' },
    {
        path: '/passport', component: passportPage, children: [
            { path: '/', redirect: 'login' },
            { path: 'login', component: loginPage },
            { path: 'register', component: registerPage }
        ]
    },
    {
        path: '/main', component: mainPage, children: [
            ...mainRoutes
        ]
    }
];