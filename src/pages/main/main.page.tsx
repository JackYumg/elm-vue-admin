import { defineComponent } from "vue";
import { ElAside, ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import passportClasses from './main.module.scss';
import Menu from "../../components/main/Menu";
import Header from "../../components/main/Header";
import UserInfo from "../../components/main/UserInfo";
export default defineComponent({
    components: {
        Menu
    },
    render() {
        return <ElContainer class={passportClasses.container}>
            <ElHeader class={passportClasses.header}>
                <Header></Header>
            </ElHeader>
            <ElContainer>
                <ElAside class={passportClasses.aside}>
                    <UserInfo></UserInfo>
                    <Menu></Menu>
                </ElAside>
                <ElContainer class={passportClasses.content}>
                    <ElMain></ElMain>
                    <ElFooter></ElFooter>
                </ElContainer>
            </ElContainer>
        </ElContainer>
    }
})