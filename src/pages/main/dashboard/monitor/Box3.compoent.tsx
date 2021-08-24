import MonitorStyles from './monitor.module.scss';
import { defineComponent } from "vue";
import { option2 } from './monitor.data';
import * as echarts from 'echarts';
export default defineComponent({
    mounted(){
        const box1: any = this.$refs.box3;
        console.log(box1);
        const instance = echarts.init(box1);
        instance.setOption((option2 as any));
    },
    render() {
        return <div class={MonitorStyles.box2}>
            <div class={MonitorStyles.chart2} ref={'box3'}>
            </div>
        </div>
    }
})