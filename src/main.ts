
import { ElAside, ElAvatar, ElButton, ElCheckbox, ElContainer, ElDatePicker, ElDropdown, ElDropdownItem, ElDropdownMenu, ElFooter, ElForm, ElFormItem, ElHeader, ElIcon, ElInput, ElLink, ElMain, ElMenu, ElMenuItem, ElMenuItemGroup, ElMessage, ElRow, ElSubmenu, ElTabs, locale } from 'element-plus'
import { createApp } from 'vue'
import App from './App'
import { appkey, rootStore } from '@store/index'
import '@core/element-variables.scss'
import '@core/style.scss'
import { router } from './router'
// import VMMock from 'vmmock';
// import axios from 'axios';
// import { allMockData } from './../mock/index';

// 路由配置
const app = createApp(App);

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
// var mock = new VMMock();
// mock.setUp({
//     timeout: 4000,
//     basepath: '/apis',
//     logger: true
// });
// mock.mouteAxios(axios);
// mock.setMockData(allMockData);
app.use(rootStore, appkey).use(router).mount('#app');
