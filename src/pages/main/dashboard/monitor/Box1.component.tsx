import { defineComponent } from "vue";
import MonitorStyles from './monitor.module.scss';
export default defineComponent({
    render() {
        return <div class={MonitorStyles.box1}></div>
    }
})