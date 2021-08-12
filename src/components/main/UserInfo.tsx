import { ElAvatar, ElRow, ElCol } from "element-plus";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { appkey } from "@store/index";
import mainStyles from './main.module.scss';
export default defineComponent({
    render() {
        const store = useStore(appkey);
        const mainState = store.state.main;
        const getCollapse = () => {
            return <ElRow class={[mainStyles.row, mainStyles.collapseInfoRow]}>
                <ElCol span={8}>
                    <ElAvatar src={'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'}></ElAvatar>
                </ElCol >
                <ElCol span={16} class={mainStyles.info}>
                    <strong class={mainStyles.infoName}>张三</strong>
                    <p class={mainStyles.infoEmail}>12121@qq.com</p>
                </ElCol>
            </ElRow>
        }

        const getUnCollapse = () => {
            return <ElRow class={[mainStyles.collapseRow, mainStyles.infoRow]}>
                <ElCol span={24}>
                    <ElAvatar src={'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'}></ElAvatar>
                </ElCol >
            </ElRow>
        }

        return !mainState.menuToggle ? getCollapse() : getUnCollapse()
    }
})