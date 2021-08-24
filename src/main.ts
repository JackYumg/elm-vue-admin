
import { ElAside, ElAvatar, ElButton, ElCheckbox, ElContainer, ElDatePicker, ElDropdown, ElDropdownItem, ElDropdownMenu, ElFooter, ElForm, ElFormItem, ElHeader, ElIcon, ElInput, ElLink, ElMain, ElMenu, ElMenuItem, ElMenuItemGroup, ElMessage, ElRow, ElSubmenu, ElTabs, locale } from 'element-plus'
import { createApp } from 'vue'
import App from './App'

import { rootRoutes } from '@router/index'
import * as VueRouter from 'vue-router'
import { appkey, rootStore } from '@store/index'
import '@core/element-variables.scss'
import '@core/style.scss'
import VMMock from 'vmmock';
import axios from 'axios';
import { windowEvent } from '@utils/event'
import { allMockData } from './../mock/index';
// 路由配置
const app = createApp(App);
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: rootRoutes
});

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
    ElMessage,
    ElDatePicker
];

function applyPlugins() {
    elementPlugins.map(plugin => {
        app.use(plugin);
    });
}
applyPlugins();
var mock = new VMMock();
mock.setUp({
    timeout: 4000,
    basepath: '/apis',
    logger: true
});
mock.mouteAxios(axios);
mock.setMockData(allMockData);
app.use(rootStore, appkey);
app.use(router);
app.mount('#app');
