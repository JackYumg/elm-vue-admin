import { ElCol, ElIcon, ElRow } from "element-plus";
import { defineComponent } from "vue";
import dashboardStyles from './dashboard.module.scss';
import BoxComponents from './default/Boxs.component';
import CountComponent from "./default/Count.component";
import MonthCountComponent from "./default/MonthCount.component";
export default defineComponent({
    components: {
        BoxComponents
    },
    render() {
        return <div class={dashboardStyles.defaultPage}>
            <div class={dashboardStyles.nav}>
                <h1> Dashboard <br />
                    <small>Welcome !</small></h1>
            </div>
            <BoxComponents />
            <ElRow gutter={20}>
                <ElCol span={12}>
                    <MonthCountComponent/>
                </ElCol>
                <ElCol span={12}>
                    <CountComponent/>
                </ElCol>
            </ElRow>
        </div>
    }
})