import { ElCol, ElRow } from "element-plus";
import { defineComponent } from "vue";
import dashboardStyles from './dashboard.module.scss';
import BoxComponents from './default/Boxs.component';
import CountComponent from "./default/Count.component";
import ImgCardComponent from "./default/ImgCard.component";
import ListCompoent from "./default/List.compoent";
import MonthCountComponent from "./default/MonthCount.component";
export default defineComponent({
    render() {
        return <div class={dashboardStyles.defaultPage}>
            <div class={dashboardStyles.nav}>
                <h1> Dashboard <br />
                    <small>Welcome !</small></h1>
            </div>
            <BoxComponents />
            <ElRow gutter={20}>
                <ElCol span={12} sm={12} xs={24} class={dashboardStyles.colItem}>
                    <MonthCountComponent/>
                </ElCol>
                <ElCol span={12} sm={12} xs={24} class={dashboardStyles.colItem}>
                    <CountComponent/>
                </ElCol>
            </ElRow>
            <ElRow gutter={20}>
                <ElCol span={12} xs={24} class={dashboardStyles.colItem}>
                    <ImgCardComponent/>
                </ElCol>
                <ElCol span={12} xs={24} class={dashboardStyles.colItem}>
                    <ListCompoent/>
                </ElCol>
            </ElRow>
        </div>
    }
})