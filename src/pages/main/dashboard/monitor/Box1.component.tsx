import { defineComponent } from "vue";
import MonitorStyles from './monitor.module.scss';
import * as echarts from 'echarts';
import { option1 } from "./monitor.data";
import d from '@assets/json/cq5.json';
import { ElCol, ElRow } from "element-plus";
export default defineComponent({
    mounted() {
        echarts.registerMap('重庆', d);
        const box1: any = this.$refs.box1;
        console.log(box1);
        const instance = echarts.init(box1);
        instance.setOption((option1 as any));
    },
    render() {
        return <div class={MonitorStyles.box1} >
            <ElRow class={MonitorStyles.info}>
                <ElCol span={6} md={6} sm={12} xs={24}>
                    <div class={MonitorStyles.numberInfo}>
                        <div class={MonitorStyles.numberInfoTitle}>今日交易总额</div>
                        <div class={MonitorStyles.numberInfoValue}>124,543,233元</div>
                    </div>
                </ElCol>
                <ElCol span={6} md={6} sm={12} xs={24}>
                    <div class={MonitorStyles.numberInfo}>
                        <div class={MonitorStyles.numberInfoTitle}>销售目标完成率</div>
                        <div class={MonitorStyles.numberInfoValue}>92%</div>
                    </div>
                </ElCol>
                <ElCol span={6} md={6} sm={12} xs={24}>
                    <div class={MonitorStyles.numberInfo}>
                        <div class={MonitorStyles.numberInfoTitle}>活动剩余时间</div>
                        <div class={MonitorStyles.numberInfoValue}>00:00:00</div>
                    </div>
                </ElCol>
                <ElCol span={6} md={6} sm={12} xs={24}>
                    <div class={MonitorStyles.numberInfo}>
                        <div class={MonitorStyles.numberInfoTitle}>每秒交易总额</div>
                        <div class={MonitorStyles.numberInfoValue}>234元</div>
                    </div>
                </ElCol>
            </ElRow>
            <div class={MonitorStyles.chat} ref={'box1'}>

            </div>
        </div>
    }
})