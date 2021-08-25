import { ElCol, ElRow } from "element-plus";
import { defineComponent } from "vue";
import MonitorStyles from './monitor.module.scss';
import * as echarts from 'echarts';
import { option6 } from "./monitor.data";
import 'echarts-wordcloud';

export default defineComponent({
    mounted() {
        const chart1 = this.$refs.chart1;
        const instance1 = echarts.init(chart1 as HTMLDivElement);
        instance1.setOption(option6 as any);
    },
    render() {
        return <ElRow class={MonitorStyles.box3}>
            <ElCol span={24}>
                <div class={MonitorStyles.chart3} ref={'chart1'}></div>
            </ElCol>
        </ElRow>
    }
})