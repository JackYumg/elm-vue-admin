import { ElAside, ElAvatar, ElButton, ElCheckbox, ElContainer, ElDropdown, ElDropdownItem, ElDropdownMenu, ElFooter, ElForm, ElFormItem, ElHeader, ElIcon, ElInput, ElLink, ElMain, ElMenu, ElMenuItem, ElMenuItemGroup, ElMessage, ElRow, ElSubmenu, ElTabs, locale } from 'element-plus'
import { createApp } from 'vue'
import App from './App'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import './core/element-variables.scss'
import './core/style.scss'

import { rootRoutes } from './router'
import * as VueRouter from 'vue-router'
import { createI18n } from 'vue-i18n'
import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import { i18Messages } from './core/i18n/i8n.message'
import { createStore } from 'vuex'
import { appkey, rootStore } from './store'
locale(lang);
declare const module: { hot: any };
// 国际化配置
// 路由配置
const app = createApp(App);
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: rootRoutes
});

const i18n = createI18n({
    locale: zhLocale.name,
    fallbackLocale: enLocale.name,
    messages: i18Messages,
})

// 引入 element组件
// 组件注册
const elementPlugins = [
    ElButton,
    ElContainer,
    ElHeader,
    ElMain,
    ElAside,
    ElFooter,
    ElMenu,
    ElSubmenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElIcon,
    ElAvatar,
    ElRow,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElLink,
    ElTabs,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElMessage
];

function applyPlugins() {
    elementPlugins.map(plugin => {
        app.use(plugin);
    });
}
applyPlugins();

app.use(rootStore , appkey);
app.use(i18n);
app.use(router);
app.mount('#app');
