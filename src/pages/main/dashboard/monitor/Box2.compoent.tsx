import { defineComponent } from "vue";
import MonitorStyles from './monitor.module.scss';

export default defineComponent({
    render() {
        return <div class={MonitorStyles.box2}>
            <span>目标评估</span>
            <h3>有望达到预期</h3>
            <div class={MonitorStyles.chart}>

            </div>
        </div>
    }
})