import { RouteRecordRaw } from "vue-router";
import loginPage from "../../pages/passport/login/login.page";
import passportPage from "../../pages/passport/passport.page";
import registerPage from "../../pages/passport/register/register.page";
export const passportRoutes: RouteRecordRaw = {
    path: '/passport', component: passportPage, children: [
        { path: '', redirect: '/passport/login' },
        { path: '/passport/login', component: loginPage },
        { path: '/passport/register', component: registerPage }
    ]
}