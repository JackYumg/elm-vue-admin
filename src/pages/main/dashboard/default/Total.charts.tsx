import { EChartOption , init} from "echarts";
import { defineComponent } from "vue";
import BoxStyles from './Box.module.scss';
const option: EChartOption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
            color: '#fff'
        },
        barWidth: '4'
    }],
};
export default defineComponent({
    mounted(){
        const { echartsElm } = this.$refs;
        const instance = init((echartsElm as any));
        instance.setOption(option);
    },
    render() {
        return <div ref="echartsElm" class={BoxStyles.item}>
        </div>
    }
})