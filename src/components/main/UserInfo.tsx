import { ElAvatar, ElRow, ElCol } from "element-plus";
import { defineComponent } from "vue";
import mainStyles from './main.module.scss';
export default defineComponent({
    render() {
        return <ElRow class={mainStyles.row}>
            <ElCol span={8}>
                <ElAvatar src={'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'}></ElAvatar>
            </ElCol >
            <ElCol span={16} class={mainStyles.info}>
                <strong class={mainStyles.infoName}>张三</strong>
                <p class={mainStyles['info-email']}>12121@qq.com</p>
            </ElCol>
        </ElRow>
    }
})