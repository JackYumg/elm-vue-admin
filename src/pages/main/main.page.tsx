import { defineComponent } from "vue";
import { ElContainer, ElHeader, ElMain } from 'element-plus';
import passportClasses from './main.module.scss';
import Menu from "@components/main/Menu";
import Header from "../../components/main/Header";
import UserInfo from "../../components/main/UserInfo";
import { useStore } from "vuex";
import { appkey } from "../../store";
import { RouterView } from "vue-router";
export default defineComponent({
    components: {
        Menu
    },
    render() {
        const store = useStore(appkey);
        console.log(store);
        const mainState = store.state.main;
        return <ElContainer class={passportClasses.container}>
            <ElHeader class={passportClasses.header}>
                <Header></Header>
            </ElHeader>
            <ElContainer>
                <div class={[passportClasses.aside, !mainState.menuToggle ? passportClasses.uncollapsed : passportClasses.collapsed]}>
                    <UserInfo></UserInfo>
                    <Menu></Menu>
                </div>
                <ElMain class={passportClasses.main}>
                    <RouterView></RouterView>
                </ElMain>
            </ElContainer>
        </ElContainer>
    }
})