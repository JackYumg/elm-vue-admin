import { ElCard, ElCol, ElRow } from "element-plus";
import { defineComponent } from "vue";
import DashboardStyles from './dashboard.module.scss';
import Box1Component from "./monitor/Box1.component";
import Box2Compoent from "./monitor/box2.compoent";
import Box3Compoent from "./monitor/Box3.compoent";
import Box4Component from "./monitor/Box4.component";
import Box5Component from "./monitor/Box5.component";
import Box6Component from "./monitor/Box6.component";
export default defineComponent({
    render() {
        return <div class={DashboardStyles.monitorPage}>
            <ElRow gutter={20}>
                <ElCol span={18} xl={18} xs={24} class={DashboardStyles.box}>
                    <ElCard header={'活动实时交易情况'}>
                        <Box1Component />
                    </ElCard>
                </ElCol>
                <ElCol span={6} xl={6} xs={24} class={DashboardStyles.box}>
                    <ElRow>
                        <ElCol class={DashboardStyles.box} span={24}>
                            <ElCard header={'活动情况预测'}>
                                <Box2Compoent />
                            </ElCard>
                        </ElCol>
                        <ElCol class={DashboardStyles.box} span={24}>
                            <ElCard header={'券核效率'}>
                                <Box3Compoent />
                            </ElCard>
                        </ElCol>
                    </ElRow>
                </ElCol>
            </ElRow>
            <ElRow gutter={20}>
                <ElCol span={12} xl={12} md={24} xs={24} sm={24} class={DashboardStyles.box}>
                    <ElCard header={'各类活动占比'}>
                        <Box4Component/>
                    </ElCard>
                </ElCol>
                <ElCol span={6} xl={6} md={12} xs={24} sm={12} class={DashboardStyles.box}>
                    <ElCard header={'热门活动'}>
                        <Box5Component/>
                    </ElCard>
                </ElCol>
                <ElCol span={6} xl={6} md={12} xs={24} sm={12} class={DashboardStyles.box}>
                    <ElCard header={'资源剩余'}>
                        <Box6Component/>
                    </ElCard>
                </ElCol>
            </ElRow>
        </div>
    }
})