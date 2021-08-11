import { init } from "echarts";
import { ElCard } from "element-plus";
import { defineComponent } from "vue";
import defaultStyle from './Box.module.scss';
const option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['确认场次', '取消场次']
    },
    dataZoom: {
        show: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} 场'
        }
    },
    series: [
        {
            name: '确认场次',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            itemStyle: {
                color: '#67c23a'
            }
        },
        {
            name: '取消场次',
            type: 'line',
            data: [1, 3, 2, 5, 3, 2, 0],
            itemStyle: {
                color: '#f56c6c'
            }
        }
    ]
};
export default defineComponent({
    mounted() {
        const elm: HTMLDivElement = (this.$refs.countRef as HTMLDivElement);
        const instance = init(elm);
        instance.setOption((option as any));
    },
    render() {
        const slots = {
            header: () => <h3 style={{ margin: 0 }}>确认/取消场次统计</h3>,
        }
        return <ElCard v-slots={slots}>
            <div class={[defaultStyle.boxContainer, defaultStyle.mouseCount]} ref={'countRef'}></div>
        </ElCard>
    }
})