import { defineComponent } from "vue";
import { option8 } from "./monitor.data";
import MonitorStyles from './monitor.module.scss';
import * as echarts from 'echarts';

export default defineComponent({
    mounted(){
        const box1: any = this.$refs.box;
        const instance = echarts.init(box1);
        console.log(box1);
        instance.setOption((option8 as any));
    },
    render() {
        return <div class={MonitorStyles.box2}>
            <span>目标评估</span>
            <h3>有望达到预期</h3>
            <div class={MonitorStyles.chart} ref={'box'}>

            </div>
        </div>
    }
})