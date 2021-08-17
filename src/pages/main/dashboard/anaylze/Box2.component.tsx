import { ElCard, ElTabPane, ElTabs, ElDatePicker, ElButtonGroup, ElButton } from "element-plus";
import { defineComponent, reactive } from "vue";
import anaylzeStyles from './anaylze.module.scss';
import * as echarts from 'echarts';
import RankComponent from "./Rank.component";
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
        barWidth: '40'
    }],
    grid: {
        left: '4%',
        top: '14%',
        right: '2%',
        bottom: '10%'
    }
};

export default defineComponent({
    mounted() {
        setTimeout(() => {
            const box1: HTMLDivElement = this.$refs.box1 as any;
            const instance1 = echarts.init(box1 as any);
            instance1.setOption(option as any);
        }, 100);
        setTimeout(() => {
            const box2: HTMLDivElement = this.$refs.box2 as any;
            const instance2 = echarts.init(box2 as any);
            instance2.setOption(option as any);
        }, 1000);
    },
    render() {
        const state = reactive({
           queryDate: new Date() 
        });
        return <div class={anaylzeStyles.nav2}>
            <ElCard bodyStyle={{ padding: '8px 20px' }}>
                <ElTabs>
                    <ElTabPane label={'销售额'}>
                        <div class={anaylzeStyles.panel}>
                            <div class={anaylzeStyles.charts}>
                                <div class={anaylzeStyles.box1} ref={'box1'}></div>
                            </div>
                            <div class={anaylzeStyles.list}>
                                <RankComponent title={'销售额'} />
                            </div>
                        </div>
                    </ElTabPane>
                    <ElTabPane label={'访问量'}>
                        <div class={anaylzeStyles.panel}>
                            <div class={anaylzeStyles.charts}>
                                <div class={anaylzeStyles.box1} ref={'box2'}></div>
                            </div>
                            <div class={anaylzeStyles.list}>
                                <RankComponent title={'访问量'} />
                            </div>
                        </div>
                    </ElTabPane>
                </ElTabs>
            </ElCard>
            <div class={anaylzeStyles.query}>
                <ElButtonGroup>
                    <ElButton size={'small'}>今日</ElButton>
                    <ElButton size={'small'}>本周</ElButton>
                    <ElButton size={'small'}>本月</ElButton>
                    <ElButton size={'small'}>全年</ElButton>
                </ElButtonGroup>
                &nbsp;
                <ElDatePicker defaultTime={new Date()} modelValue={state.queryDate} format="YYYY-MM-dd" type="daterange" size={'small'}></ElDatePicker>
            </div>
        </div>
    }
});