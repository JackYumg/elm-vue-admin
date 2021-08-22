import { defineComponent } from 'vue';
import AnaylzeStyles from './anaylze.module.scss';
import { ElCard, ElIcon, ElProgress } from "element-plus";
import * as echarts from 'echarts';

const option: echarts.EChartOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130, 100, 60, 40, 90, 99, 80, 109, 90],
        type: 'bar',
        itemStyle: {
            color: '#B998E7'
        },
        barWidth: '6'
    }],
};
export default defineComponent({
    mounted() {
        const ref: HTMLDivElement = (this.$refs.visitCount as HTMLDivElement);
        const ref2: HTMLDivElement = (this.$refs.applyCount as HTMLDivElement);
        const instance = echarts.init(ref);
        const instance2 = echarts.init(ref2);
        instance.setOption(option as any);
        const option2 = JSON.parse(JSON.stringify(option));
        option2.series[0].itemStyle.color = '#409EFF';
        instance2.setOption(option2 as any);
    },
    render() {
        return <div class={AnaylzeStyles.nav}>
            <div class={AnaylzeStyles.item}>
                <ElCard bodyStyle={{ padding: '24px 24px 8px 24px ' }}>
                    <div class={AnaylzeStyles.top}>
                        <div class={AnaylzeStyles.value}>
                            总销售额
                            <ElIcon class={AnaylzeStyles.icon} name={'warning-outline'}></ElIcon>
                        </div>
                        <p class={AnaylzeStyles.total}>¥ 126,560</p>
                    </div>
                    <div class={AnaylzeStyles.desc}>
                        <p class="arrow-up">
                            周同比 23%
                        </p>
                        <p class="arrow-down">
                            日同比 18%
                        </p>
                    </div>
                    <div class={AnaylzeStyles.footer}>
                        <p>日销售
                            <span>￥23,2323</span>
                        </p>
                    </div>
                </ElCard>
            </div>
            <div class={AnaylzeStyles.item}>
                <ElCard bodyStyle={{ padding: '24px 24px 8px 24px ' }}>
                    <div class={AnaylzeStyles.top}>
                        <div class={AnaylzeStyles.value}>
                            访问量
                            <ElIcon class={AnaylzeStyles.icon} name={'warning-outline'}></ElIcon>
                        </div>
                        <p class={AnaylzeStyles.total}>¥ 126,560</p>
                    </div>
                    <div class={AnaylzeStyles.desc} ref={'visitCount'}>

                    </div>
                    <div class={AnaylzeStyles.footer}>
                        <p>日访问量
                            <span>23,2323</span>
                        </p>
                    </div>
                </ElCard>
            </div>
            <div class={AnaylzeStyles.item}>
                <ElCard bodyStyle={{ padding: '24px 24px 8px 24px ' }}>
                    <div class={AnaylzeStyles.top}>
                        <div class={AnaylzeStyles.value}>
                            支付笔数
                            <ElIcon class={AnaylzeStyles.icon} name={'warning-outline'}></ElIcon>
                        </div>
                        <p class={AnaylzeStyles.total}>560</p>
                    </div>
                    <div class={AnaylzeStyles.desc} ref={'applyCount'}>

                    </div>
                    <div class={AnaylzeStyles.footer}>
                        <p>转化率
                            <span>23,2323</span>
                        </p>
                    </div>
                </ElCard>
            </div>
            <div class={AnaylzeStyles.item}>
                <ElCard bodyStyle={{ padding: '24px 24px 8px 24px ' }}>
                    <div class={AnaylzeStyles.top}>
                        <div class={AnaylzeStyles.value}>
                            活动进度
                            <ElIcon class={AnaylzeStyles.icon} name={'warning-outline'}></ElIcon>
                        </div>
                        <p class={AnaylzeStyles.total}>¥ 126,560</p>
                    </div>
                    <div class={AnaylzeStyles.desc}>
                        <ElProgress percentage={75} color={'#67c23a'}></ElProgress>
                    </div>
                    <div class={AnaylzeStyles.footer}>
                        <p>
                            <p style={{ 'float': 'left' }}>周同比
                                <span>20%</span>
                            </p>
                            <p style={{ 'float': 'right' }}>日同比
                                <span>40%</span>
                            </p>
                        </p>
                    </div>
                </ElCard>
            </div>
        </div>
    }
});