import { defineComponent } from "vue";
import defaultStyle from './Box.module.scss';
import { init } from "echarts";
import BoxCompoent from "../../../../components/box/Box.compoent";
import { ElCard } from "element-plus";
const option: any = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130, 40, 50, 20, 100, 500, 90],
        type: 'bar',
        showBackground: false,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
            color: '#409EFF'
        },
    }]
};
export default defineComponent({
    components: {
        BoxCompoent
    },
    mounted() {
        const elm: HTMLDivElement = (this.$refs.monthCount as HTMLDivElement);
        const instance = init(elm);
        instance.setOption(option);
    },
    render() {
        const slots = {
            header: () => <h3 style={{ margin: 0 }}>每月活动举办场次统计</h3>,
        }
        return <ElCard v-slots={slots}>
            <div class={[defaultStyle.boxContainer, defaultStyle.mouseCount]} ref={'monthCount'} ></div>
        </ElCard>
    }
})