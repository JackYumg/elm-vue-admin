import { RouteRecordRaw } from "vue-router";
export const passportRoutes: RouteRecordRaw = {
    path: '/passport',
    component: () => import('@pages/passport/passport.page'),
    children: [
        { path: '', redirect: '/passport/login' },
        { path: '/passport/login', component: () => import('@pages/passport/login/login.page') },
        { path: '/passport/register', component: () => import('@pages/passport/register/register.page') }
    ]
}