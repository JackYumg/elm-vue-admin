import { ElCol, ElRow } from "element-plus";
import { defineComponent } from "vue";
import MonitorStyles from './monitor.module.scss';
import * as echarts from 'echarts';
import { option3, option4, option5 } from './monitor.data';
export default defineComponent({
    mounted() {
        const chart1 = this.$refs.chart1;
        const instance1 = echarts.init(chart1 as HTMLDivElement);
        instance1.setOption(option3 as any);
        const chart2 = this.$refs.chart2;
        const instance2 = echarts.init(chart2 as HTMLDivElement);
        instance2.setOption(option4 as any);
        const chart3 = this.$refs.chart3;
        const instance3 = echarts.init(chart3 as HTMLDivElement);
        instance3.setOption(option5 as any);
    },
    render() {
        return <ElRow class={MonitorStyles.box3}>
            <ElCol span={8}>
                <div class={MonitorStyles.chart3} ref={'chart1'}></div>
            </ElCol>
            <ElCol span={8}>
                <div class={MonitorStyles.chart3} ref={'chart2'}></div>
            </ElCol>
            <ElCol span={8}>
                <div class={MonitorStyles.chart3} ref={'chart3'}></div>
            </ElCol>
        </ElRow>
    }
})