import { ElRow, ElCol } from "element-plus";
import { defineComponent } from "vue";
import dashboardStyles from './../dashboard.module.scss';
import TotalCharts from "./Total.charts";
export default defineComponent({
    setup(){

    },
    render() {
        return <ElRow class={dashboardStyles.item} gutter={20}>
            <ElCol span={6} xs={24} sm={12} md={6} class={[dashboardStyles.itemCol]}>
                <div class={[dashboardStyles.box, dashboardStyles.primary]}>
                    <div class={dashboardStyles.title}>
                        <div class={dashboardStyles.h2}>2323</div>
                        <div class={dashboardStyles.desc}>活动总场次</div>
                    </div>
                    <div class={dashboardStyles.icon}>
                        <TotalCharts></TotalCharts>
                    </div>
                </div>
            </ElCol>
            <ElCol span={6} xs={24} sm={12} md={6} class={[dashboardStyles.itemCol]}>
                <div class={[dashboardStyles.box, dashboardStyles.success]}>
                    <div class={dashboardStyles.title}>
                        <div class={dashboardStyles.h2}>982</div>
                        <div class={dashboardStyles.desc}>活动确认场次</div>
                    </div>
                    <div class={dashboardStyles.icon}>
                        <TotalCharts></TotalCharts>
                    </div>
                </div>
            </ElCol>
            <ElCol span={6} xs={24} sm={12} md={6} class={[dashboardStyles.itemCol]}>
                <div class={[dashboardStyles.box, dashboardStyles.warning]}>
                    <div class={[dashboardStyles.title]}>
                        <div class={dashboardStyles.h2}>1,332</div>
                        <div class={dashboardStyles.desc}>活动待定场次</div>
                    </div>
                    <div class={dashboardStyles.icon}>
                        <TotalCharts></TotalCharts>
                    </div>
                </div>
            </ElCol>
            <ElCol span={6} xs={24} sm={12} md={6} class={[dashboardStyles.itemCol]}>
                <div class={[dashboardStyles.box, dashboardStyles.danger]}>
                    <div class={dashboardStyles.title}>
                        <div class={dashboardStyles.h2}>87</div>
                        <div class={dashboardStyles.desc}>活动撤销场次</div>
                    </div>
                    <div class={dashboardStyles.icon}>
                        <TotalCharts></TotalCharts>
                    </div>
                </div>
            </ElCol>
        </ElRow>
    }
})

